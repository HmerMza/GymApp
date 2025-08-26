import { supabase } from "@/utils/supabase";

export async function signInWithEmail(
  email: string,
  password: string,
  setLoading: (loading: boolean) => void
) {
  setLoading(true);
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) return error.message;
  setLoading(false);
}
