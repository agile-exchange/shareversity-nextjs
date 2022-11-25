"use client";
import { useState } from "react";
import supabase from "../utils/supabase-browser";
import { useRouter } from "next/navigation";

export default function SignupUI() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    if (!email) return;
    if (!password) return;

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.log({ error });
    } else {
      setSubmitted(true);
    }

    if (submitted) {
      return <h1>Check your email, for verification link.</h1>;
    }
  };

  return (
    <>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSignup}>Signup</button>
    </>
  );
}
