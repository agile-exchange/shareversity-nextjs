"use client";
import supabase from "../utils/supabase-browser";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export const revalidate = 0;

export default function ProfileUI() {
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log({ error });
    } else {
      router.push("/");
    }
  };

  const fetchProfile = async () => {
    const user = await supabase.auth.getUser();
    if (user) {
      setProfile(user);
    }
  };

  if (!profile) return null;

  return (
    <>
      <h1>Profile</h1>
      <p>Email: {profile.data.user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
