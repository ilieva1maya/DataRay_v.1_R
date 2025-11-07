import { useState } from "react";

// export function AddProjectForm(props: { onSubmit: (title: string) => void }) {
export function AddProjectForm({ onSubmit }: { onSubmit: (title: string) => void }) {
    // props.onSubmit
    onSubmit
    const [newProjectTitle, setNewProjectTitle] = useState("");
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (newProjectTitle.trim() === "") return;

        // props.onSubmit(newProjectTitle.trim());
        onSubmit(newProjectTitle.trim());

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
