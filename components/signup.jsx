"use client";
import { useState } from "react";
import supabase from "../utils/supabase-browser";
import { useRouter } from "next/navigation";
import { validateEduEmailAccount, validateEmail, verifyPassword} from "../utils/validate";

export default function SignupUI() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const [incorrectEmailEntered, setIncorrectEmailEntered] = useState(false);
  const [incorrectEduEmailAccount, setIncorrectEduEmailAccount] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSignup = async () => {
    if(!validateEmail(email)){
      setIncorrectEmailEntered(true);
      return;
    }

    if(!validateEduEmailAccount(email)){
      setIncorrectEduEmailAccount(true);
      return;
    }

    if(verifyPassword(password)!=="Password is correct"){
      setIncorrectPassword(true);
      return;
    }

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
      <div className="signup-form">
        <h1>Signup</h1>
        {incorrectEmailEntered && (
          <label className="incorrectemail">
            Please enter a valid email
            <br />
          </label>
        )}
        {incorrectEduEmailAccount && (
          <label className="incorrectemail">
            Please enter an edu account email
            <br />
          </label>
        )}
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {incorrectPassword && (
          <label className="incorrectemail">
            Please enter a valid password Password cant be Empty, Password
            length must be greater than 8 characters and less than 15 characters
            <br />
          </label>
        )}
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleSignup}>Signup</button>
      </div>
    </>
  );
}
