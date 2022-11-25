"use client";
import supabase from "../utils/supabase-browser";


export default function LogoutUI() {

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log({ error });
    }
  };
  return (
    <>
      <h1>Logout</h1>

      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
