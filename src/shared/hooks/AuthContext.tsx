import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthSession } from "@supabase/supabase-js";
import supabase from "../services/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../errors/AppError";

interface User {
  id: string;
  avatar_url: string;
  full_name: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContextData {
  session: AuthSession | undefined | null;
  signIn(email: string, password: string): Promise<void>;
  signUp(email: string, password: string, name: string): Promise<void>;
  signOut(): Promise<void>;
  user: User | undefined;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<AuthSession | null | undefined>(
    undefined
  );
  const [user, setUser] = useState<User | undefined>({} as User);
  const [isLoading, setIsLoading] = useState(true);

  async function signOut() {
    let { error } = await supabase.auth.signOut();

    if (error) throw new AppError(error.message, error.status);

    setSession(undefined);
    setUser(undefined);
    setIsLoading(false);
  }

  async function signIn(email: string, password: string) {
    setIsLoading(true);

    const { error, user } = await supabase.auth.signIn({ email, password });

    if (error) {
      throw new AppError(error.message, error.status);
    }
    setIsLoading(false);
  }

  async function signUp(email: string, password: string, name: string) {
    setIsLoading(true);

    const { error, user } = await supabase.auth.signUp({ email, password });

    if (error) {
      throw new AppError(error.message, error.status);
    }

    const { data, error: insert_error } = await supabase
      .from("profiles")
      .insert([
        {
          id: user?.id,
          avatar_url: "",
          full_name: name,
        },
      ]);
    if (insert_error) {
      throw new AppError(insert_error.message, 500);
    }

    console.log({ data });
    setUser({
      id: data[0].id,
      avatar_url: data[0].avatar_url,
      full_name: data[0].full_name,
    });
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);

    try {
      const fetchedSession = supabase.auth.session();
      setSession(fetchedSession || undefined);

      (async () => {
        const storedSession = await AsyncStorage.getItem("supabase.auth.token");
        if (!storedSession) {
          setSession((oldSession) =>
            oldSession === undefined ? null : oldSession
          );
        }
      })();
    } catch (error) {
      console.log("try catch error on userContext");
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log(
          `Supabase auth event: ${event}, session user: ${session?.user?.email}`
        );

        if (session) {
          setSession(session);

          const { data, error } = await supabase
            .from("profiles")
            .select("id,avatar_url,full_name")
            .eq("id", session.user?.id);

          let fetchedUser: User;
          if (!error && data && !isLoading) {
            fetchedUser = {
              id: data[0].id,
              avatar_url: data[0].avatar_url,
              full_name: data[0].full_name,
            };
            setUser(fetchedUser);
            setIsLoading(false);
            return;
          }
        }

        setSession(undefined);
        setUser({} as User);
      }
    );
    setIsLoading(false);
    return () => {
      authListener!.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, signIn, signUp, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
