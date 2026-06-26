import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, signInWithGoogle, sendEmailSignInLink } from "../googleauth";
import "./Auth.css";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) navigate("/");
    });
  }, [navigate]);

  const handleGoogleRegister = async () => {
    try {
      setLoading(true);
      setMessage("");
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      console.error(error);
      setMessage("Google registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailRegister = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    try {
      setLoading(true);
      setMessage("");
      await sendEmailSignInLink(email.trim());
      setMessage("Check your email to finish creating your account.");
    } catch (error) {
      console.error(error);
      setMessage("Could not send registration link. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p className="auth-subtitle">Join WebCafe in seconds</p>

        <button
          type="button"
          className="auth-btn auth-btn--google"
          onClick={handleGoogleRegister}
          disabled={loading}
        >
          Sign up with Google
        </button>

        <div className="auth-divider">or</div>

        <form onSubmit={handleEmailRegister} className="auth-form">
          <label htmlFor="register-email">Email (passwordless)</label>
          <input
            id="register-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Sending..." : "Send registration link"}
          </button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <p className="auth-footer">
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;