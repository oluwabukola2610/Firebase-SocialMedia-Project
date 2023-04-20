import React from "react";
import { auth, provider } from "../Config/Firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  
  const signInGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  return (
    <div>
      <p>Sign in with Goggle</p>
      <button onClick={signInGoogle}>Sign in with Google</button>
    </div>
  );
};
