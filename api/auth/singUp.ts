import { supabase } from "@/utils/supabase";

export async function signUpWithEmail(
  email: string,
  password: string,
  name: string,
  lastName: string,
  setLoading: (loading: boolean) => void
) {
  setLoading(true);
  const {
    data: { session, user },
    error,
  } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) console.log(error);

  if (user) {
    const { error } = await supabase
      .from("profiles")
      .insert([{ id: user.id, first_name: name, last_name: lastName }]);
    if (error) return error.message;
  }

  if (!session) return "Please check your inbox for email verification!";
}
