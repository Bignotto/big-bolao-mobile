import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

//FIX: use babel in line dot env
const { SUPABASE_URL } = process.env;
const { SUPABASE_ANON_KEY } = process.env;

export const supabase = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false,
});

export default supabase;
