import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/"); // redirect to login if not logged in
  }, [navigate]);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your mini-Jira dashboard!</p>
    </div>
  );
}

export default Dashboard;

<button onClick={() => {
  localStorage.removeItem("token");
  navigate("/");
}}>Logout</button>