import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { completeEmailSignInIfNeeded } from "../googleauth";

const FinishSignIn = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("Completing sign-in...");

  useEffect(() => {
    completeEmailSignInIfNeeded()
      .then((result) => {
        if (result) {
          setMessage("Signed in successfully!");
          navigate("/");
        } else {
          setMessage("Invalid or expired sign-in link.");
        }
      })
      .catch(() => setMessage("Sign-in failed. Try again."));
  }, [navigate]);

  return <p>{message}</p>;
};

export default FinishSignIn;