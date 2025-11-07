import type { ProjectItemI } from "../interfaces/project";
import { ProjectItem } from "./ProjectItem";


export function ProjectsList({projects, toggleProject, finishProject}: {
  projects: ProjectItemI[];
  toggleProject: (id: string, completed: boolean) => void;
  finishProject: (id: string) => void;
}) {
  return (
    <ul>
      {projects.length === 0 && (
        <li className="empty">Get started by adding a project above!</li>
      )}
{projects.map((project) => ProjectItem(
  project.completed,
  finishProject,
  project,
  toggleProject
))}
    </ul>
  );
}
