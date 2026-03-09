import { useState } from "react";
import "./App.css";

const projectsData = [
  { id: 1, title: "Portfolio Website", category: "Web", desc: "Personal portfolio in HTML/CSS/JS" },
  { id: 2, title: "Python Automation", category: "Python", desc: "Automation script in Python" },
  { id: 3, title: "Django Blog", category: "Web", desc: "Blog app using Django" },
  { id: 4, title: "SQL Mini Project", category: "Database", desc: "Student management system" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="header">
        <h1>Pranav Prasad Deolekar</h1>
        <p>Electronics Engineer | Python Full Stack Developer</p>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <section className="section">
        <h2>About Me</h2>
        <p>
          I am an Electronics Engineer learning Python Full Stack Development.
          Interested in software development and financial markets.
        </p>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul className="skills">
          <li>Python</li>
          <li>HTML, CSS, JavaScript</li>
          <li>React (Learning)</li>
          <li>Django / Flask</li>
          <li>SQL</li>
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>

        <div className="filters">
          {["All", "Web", "Python", "Database"].map((cat) => (
            <button
              key={cat}
              className={filter === cat ? "active" : ""}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <span className="tag">{project.category}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Resume</h2>
        <a className="btn" href="#" onClick={(e) => e.preventDefault()}>
          Download Resume
        </a>
      </section>

      <footer className="footer">
        <p>© 2026 Pranav. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
