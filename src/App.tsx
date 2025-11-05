import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");

  return (
    <>
      <h1>DataRay...</h1>
      <form className="basic-form" action="">
        <div className="form-row">
          <label htmlFor="urlInput">Enter Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            placeholder="Enter Item here..."
            id="inpuItem"
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="complete">Complete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="complete">Complete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 3
          </label>
          <button className="complete">Complete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
