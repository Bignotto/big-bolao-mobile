import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "react-native";
import { AuthSession } from "@supabase/supabase-js";
import supabase from "../services/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../errors/AppError";

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContextData {
  session: AuthSession | undefined | null;
  signIn(email: string, password: string): Promise<void>;
  signOut(): Promise<void>;
  googleSignIn(): Promise<void>;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<AuthSession | null | undefined>(
    undefined
  );

  async function signOut() {
    try {
      let { error } = await supabase.auth.signOut();
      if (error) return Alert.alert("something wrong in sing out");
    } catch (error) {}
  }

  async function signIn(email: string, password: string) {
    const { error, user } = await supabase.auth.signIn({ email, password });

    if (error) {
      throw new AppError(error.message, error.status);
    }
  }

  async function googleSignIn() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });
    console.log({ session, error });
    if (error) {
      throw new AppError(error.message, error.status);
    }
  }

  //TODO: Implement Sign Up function

  useEffect(() => {
    try {
      const fetchedSession = supabase.auth.session();
      setSession(fetchedSession || undefined);

      //await
      (async () => {
        //check saved session
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
      }
    );

    return () => {
      authListener!.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, signIn, signOut, googleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
