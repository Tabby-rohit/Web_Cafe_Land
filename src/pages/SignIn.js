import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, signInWithGoogle, sendEmailSignInLink } from "../googleauth";
import "./Auth.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) navigate("/");
    });
  }, [navigate]);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setMessage("");
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      console.error(error);
      setMessage("Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    try {
      setLoading(true);
      setMessage("");
      await sendEmailSignInLink(email.trim());
      setMessage("Check your email for the sign-in link.");
    } catch (error) {
      console.error(error);
      setMessage("Could not send sign-in link. Check your email and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Sign In</h1>
        <p className="auth-subtitle">Welcome back to WebCafe</p>

        <button
          type="button"
          className="auth-btn auth-btn--google"
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          Continue with Google
        </button>

        <div className="auth-divider">or</div>

        <form onSubmit={handleEmailSignIn} className="auth-form">
          <label htmlFor="signin-email">Email (passwordless)</label>
          <input
            id="signin-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Sending..." : "Send sign-in link"}
          </button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <p className="auth-footer">
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;