"use client";
import { useState } from "react";
import supabase from "../utils/supabase-browser";
import { useRouter } from "next/navigation";


export default function LoginUI() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email) return;
    if (!password) return;

    const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
    });
console.log(data);
    if (error) {
      console.log(error);
    } else {
      setSubmitted(true);

    }
console.log(submitted)
    if (submitted) {
// console.log('this is submitted');
      return router.push("/profile");
      // return (
      //   <>
      //     {console.log("whaaaat?")}
      //     <h1>Submitted!</h1>
      //   </>
      // );
    }


}
return (
    <>

      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>

     
    </>
  );
}
