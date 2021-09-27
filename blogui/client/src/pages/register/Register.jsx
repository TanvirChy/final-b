import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [role, setRole] = useState('buyer')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
        role
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          What is your Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="buyer">Buyer</option>
            <option  value="seller">Seller</option>
            
          </select>
        </label>
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
      { error && <span>Something is wrong</span>}
    </div>
  );
}
