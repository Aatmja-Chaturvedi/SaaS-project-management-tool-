// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  // Sample data for cards
  const tasksCompleted = 12;
  const tasksPending = 5;
  const teamMembers = 4;

  // Initialize particles
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <div className="home-container">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: true, zIndex: 0 },
          background: { color: { value: "#f0f4f8" } },
          particles: {
            number: { value: 60 },
            color: { value: ["#6366f1", "#ec4899", "#22c55e"] },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: { min: 2, max: 6 } },
            move: { enable: true, speed: 1 },
          },
        }}
      />

      {/* Navbar */}
      <nav className="navbar fade-in">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          Mini-Jira
        </div>
        <div className="navbar-buttons">
          <button className="btn login" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="btn register" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="home-content">
        <h1 className="home-title fade-in delay-1">Track and Manage Tasks Efficiently</h1>
        <p className="home-description fade-in delay-2">
          Mini-Jira helps you monitor tasks, collaborate with your team, and complete projects faster.  
          A lightweight Jira-like task manager for macOS and desktop users.
        </p>

        {/* Cards */}
        <div className="cards-container fade-in delay-3">
          <div className="card completed float">
            <h2>{tasksCompleted}</h2>
            <p>Tasks Completed</p>
          </div>
          <div className="card pending float delay-1">
            <h2>{tasksPending}</h2>
            <p>Tasks Pending</p>
          </div>
          <div className="card team float delay-2">
            <h2>{teamMembers}</h2>
            <p>Team Members</p>
          </div>
        </div>

        <p className="footer-note fade-in delay-4">Faculty Preview – Mini-Jira Project</p>
      </div>
    </div>
  );
}

export default Home;