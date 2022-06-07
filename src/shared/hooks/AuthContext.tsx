import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthSession, User } from "@supabase/supabase-js";
import supabase from "../services/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../errors/AppError";

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContextData {
  session: AuthSession | undefined | null;
  signIn(email: string, password: string): Promise<void>;
  signUp(email: string, password: string, name: string): Promise<void>;
  getUser(): User | null;
  signOut(): Promise<void>;
  user: User | null;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<AuthSession | null | undefined>(
    undefined
  );
  const [user, setUser] = useState<User | null>(null);

  async function signOut() {
    let { error } = await supabase.auth.signOut();

    if (error) throw new AppError(error.message, error.status);

    setSession(undefined);
  }

  async function signIn(email: string, password: string) {
    const { error, user } = await supabase.auth.signIn({ email, password });

    if (error) {
      throw new AppError(error.message, error.status);
    }
  }

  async function signUp(email: string, password: string, name: string) {
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
  }

  function getUser() {
    return supabase.auth.user();
  }

  useEffect(() => {
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
        setSession(session || undefined);
        setUser(session ? session.user : null);
      }
    );

    return () => {
      authListener!.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ session, getUser, signIn, signUp, signOut, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
