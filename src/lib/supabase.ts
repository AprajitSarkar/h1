import { createClient, AuthError, PostgrestError } from "@supabase/supabase-js";

// Ensure environment variables are defined
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY;

if (!SUPABASE_URL || !SUPABASE_API_KEY) {
  throw new Error("Missing Supabase environment variables.");
}

// Create and export the Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

/**
 * Handles user authentication (sign-in, sign-up, and sign-out).
 */
export const auth = {
  signIn: async (email: string, password: string) => {
    const { user, error }: { user: any; error: AuthError | null } =
      await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return user;
  },
  signUp: async (email: string, password: string) => {
    const { user, error }: { user: any; error: AuthError | null } =
      await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return user;
  },
  signOut: async () => {
    const { error }: { error: AuthError | null } = await supabase.auth.signOut();
    if (error) throw error;
  },
};

/**
 * Fetches data from a specific table.
 * @param tableName - The name of the table to fetch data from.
 */
export const fetchData = async <T>(tableName: string): Promise<T[]> => {
  const { data, error }: { data: T[] | null; error: PostgrestError | null } =
    await supabase.from(tableName).select("*");
  if (error) throw error;
  return data || [];
};

/**
 * Inserts data into a specific table.
 * @param tableName - The name of the table to insert data into.
 * @param payload - The data to insert.
 */
export const insertData = async <T>(
  tableName: string,
  payload: T
): Promise<void> => {
  const { error }: { error: PostgrestError | null } = await supabase
    .from(tableName)
    .insert(payload);
  if (error) throw error;
};