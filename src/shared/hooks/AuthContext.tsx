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
  isLoading: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

const sampleAvatars = [
  "https://kmqurfaofmowoonastqb.supabase.co/storage/v1/object/sign/avatars/avatar3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2F2YXRhcjMucG5nIiwiaWF0IjoxNjU0OTgyMTQ3LCJleHAiOjE5NzAzNDIxNDd9.lrvln9zudWLYW1MsSR3Z5vu39XA-dlxt-WkJivV_9n0",
  "https://kmqurfaofmowoonastqb.supabase.co/storage/v1/object/sign/avatars/avatar2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2F2YXRhcjIucG5nIiwiaWF0IjoxNjU0OTgyMTMyLCJleHAiOjE5NzAzNDIxMzJ9.-BmtYFJQrzPtb0b_TDAzMEMd07-Hpn5wUFFmSQJBumw",
  "https://kmqurfaofmowoonastqb.supabase.co/storage/v1/object/sign/avatars/avatar1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2F2YXRhcjEucG5nIiwiaWF0IjoxNjU0OTgwNDU2LCJleHAiOjE5NzAzNDA0NTZ9.bYJuCu2pk5Eeug9T8p8ZZYOKX_pZZhY9coZgOqPPiCs",
  "https://kmqurfaofmowoonastqb.supabase.co/storage/v1/object/sign/avatars/avatar4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2F2YXRhcjQucG5nIiwiaWF0IjoxNjU0OTgyMjE5LCJleHAiOjE5NzAzNDIyMTl9.mouByJtdykxEhpqoYf5ibqDLDwpQmAj4l5OGOpWr5nI",
];

function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<AuthSession | null | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);

  async function signOut() {
    setIsLoading(true);
    let { error } = await supabase.auth.signOut();

    if (error) throw new AppError(error.message, error.status);
    setSession(undefined);
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
          avatar_url: sampleAvatars[Math.floor(Math.random() * 4)],
          full_name: name,
        },
      ]);
    if (insert_error) {
      throw new AppError(insert_error.message, 500);
    }
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
        setSession(session ? session : undefined);
      }
    );
    setIsLoading(false);
    return () => {
      authListener!.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ session, signIn, signUp, signOut, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
