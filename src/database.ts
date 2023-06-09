import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types/supabase";

export const supabase = createClient<Database>(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY
,{
    auth:{detectSessionInUrl:true,persistSession:true,storage:localStorage}
})