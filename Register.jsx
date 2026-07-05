import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      alert("Registration successful!");
      navigate("/"); // go to login after registering
    } catch (err) {
      alert(err.response.data.message || "Registration failed");
    }
  };

  return (
    <div>
      <h2>Register Page</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;