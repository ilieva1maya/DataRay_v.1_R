import { useEffect, useState } from "react";
import "./App.css";
import type { ProjectItemI } from "./interfaces/project";
import { AddProjectForm } from "./components/AddProjectForm";
import { ProjectsList } from "./components/ProjectsList";

function App() {
  const [projects, setProjects] = useState<ProjectItemI[]>([]);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]); 

  function addProject(title: string) {

        setProjects((prevIProjects) => {
            const newProject: ProjectItemI = {
                id: crypto.randomUUID(),
                title,
                completed: false,
            };
            return [...prevIProjects, newProject];
        });
  }

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

    <AddProjectForm onSubmit={addProject}/>

      <h2>Current Projects: ({projects.length})</h2>
    <ProjectsList
      projects={projects}
      toggleProject={toggleProject}
      finishProject={finishProject}
    />
    </>
  );
}

export default App;
