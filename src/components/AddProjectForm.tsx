import { useState } from "react";
// import type { ProjectItem } from "../interfaces/project";

export function AddProjectForm() {

    const [newProjectTitle, setNewProjectTitle] = useState("");
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (newProjectTitle.trim() === "") return;

        // setProjects((prevIProjects) => {
        //     const newProject: ProjectItem = {
        //         id: crypto.randomUUID(),
        //         title: newProjectTitle,
        //         completed: false,
        //     };
        //     return [...prevIProjects, newProject];
        // });

        setNewProjectTitle("");
    }
    return (
        <form onSubmit={handleSubmit} className="basic-form" action="">
            <div className="form-row">
                <label htmlFor="inputProject">Enter Project</label>
                <input
                    value={newProjectTitle}
                    onChange={(e) => setNewProjectTitle(e.target.value)}
                    type="text"
                    placeholder="Enter Project here..."
                    id="inputProject"
                    className="input-field"
                />
            </div>
            <button className="btn" type="submit">
                Add Project
            </button>
        </form>
    );
}
