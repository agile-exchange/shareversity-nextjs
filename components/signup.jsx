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

  };
if (submitted) {
  return (
    <>
      <h1>Successfully signed up!</h1>
      <p>Check your email for the confirmation link.</p>
      </>)
  
}
  return (
    <>
       <h1>Signup</h1>     
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
      /> <small>at least 6 characters</small>
      <br />
      <button onClick={handleSignup}>Signup</button>
    </>
  );
}
