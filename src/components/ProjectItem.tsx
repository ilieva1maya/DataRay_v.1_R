export function ProjectItem(completed: boolean, finishProject: (id: string) => void, project: { id: string; title: string; completed: boolean; }, toggleProject: (id: string, completed: boolean) => void) {
  return (
    <li key={project.id} className={project.completed ? "completed" : ""}>
      <label className="project-list">
        <input
          type="checkbox"
          checked={project.completed}
          onChange={(e) => toggleProject(project.id, e.target.checked)}
          className="completed"
        />
        {project.title}
      </label>
      <button onClick={() => finishProject(project.id)} className="finished">
        Finish
      </button>
    </li>
  );
}
