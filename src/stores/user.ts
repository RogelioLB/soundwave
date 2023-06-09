import type { User } from "@supabase/supabase-js";
import { atom } from "nanostores";

export const user = atom<User | undefined>(undefined)