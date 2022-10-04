import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Config } from "../../../Config";

export const supabase = createClient(
  Config.SUPABASE_URL!,
  Config.SUPABASE_ANON_KEY!,
  {
    localStorage: AsyncStorage,
    detectSessionInUrl: false,
  }
);

export default supabase;
