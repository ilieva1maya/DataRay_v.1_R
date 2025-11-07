import { useState } from "react";
import "./App.css";
import type { ProjectItem } from "./interfaces/project";
import { AddProjectForm } from "./components/AddProjectForm";

function App() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  function toggleProject(id: string, completed: boolean) {
    setProjects((currentProjects) => {
      return currentProjects.map((project) => {
        if (project.id === id) {
          return { ...project, completed };
        }
        console.log(project);
        return project;
      });
    });
  }

  function finishProject(id: string) {
    setProjects((currentProjects) => {
      return currentProjects.filter((project) => project.id !== id);
    });
  }

  return (
    <>
      <h1>DataRay Project Tracker</h1>

    <AddProjectForm />

      <h2>Current Projects: ({projects.length})</h2>
      <ul>
        {projects.length === 0 && (
          <li className="empty">Get started by adding a project above!</li>
        )}
        {projects.map((project) => (
          <li key={project.id} className={project.completed ? "completed" : ""}>
            <label className="project-list">
              <input
                type="checkbox"
                checked={project.completed}
                onChange={(e) => toggleProject(project.id, e.target.checked)}
                className="completed"
              />
              {/* <span className="is-completed">{project.title}</span> */}
              {project.title}
            </label>
            <button
              onClick={() => finishProject(project.id)}
              className="finished"
            >
              Finish
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
