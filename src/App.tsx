import { useState } from "react";
import "./App.css";
import type { ProjectItem } from "./interfaces/project";

function App() {
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (newProjectTitle.trim() === "") return;
    console.log(newProjectTitle);

    setProjects((prevIProjects) => {
      const newProject: ProjectItem = {
        id: crypto.randomUUID(),
        title: newProjectTitle,
        completed: false,
      };
      return [...prevIProjects, newProject];
    });

    setNewProjectTitle("");
  }

  function toggleProject(id: string, completed: boolean) {
    setProjects((currentProjects) => {
      return currentProjects.map((project) => {
        if (project.id === id) {
          return { ...project, completed };
        }
        return project;
      });
    });
  }

  function deleteProject(id: string) {
    setProjects((currentProjects) => {
      return currentProjects.filter((project) => project.id !== id);
    });
  }

  return (
    <>
      <h1>DataRay Project Tracker</h1>
      <form onSubmit={handleSubmit} className="basic-form" action="">
        <div className="form-row">
          <label htmlFor="inputProject">Enter Project</label>
          <input
            value={newProjectTitle}
            onChange={(e) => setNewProjectTitle(e.target.value)}
            type="text"
            placeholder="Enter Project here..."
            id="inputProject"
          />
        </div>
        <button className="btn" type="submit">
          Add Project
        </button>
      </form>
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
              <span className="is-completed">{project.title}</span>
            </label>
            <button
              onClick={() => deleteProject(project.id)}
              className="deleted"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
