"use client";
import supabase from "../utils/supabase-browser";


export default function LogoutUI() {

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log({ error });
    }
    else{
      return <h1>Successfully logged out!</h1>;
    }
  };
  return (
    <>
      <h1>Logout</h1>

      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
