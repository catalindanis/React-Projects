import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Task from "./Components/Task";
import AddTask from "./Components/AddTask";

export let task = {
  title: "",
  description: ""
}

export let modify = false;

export let currentTasks = [];

function App() {
  const [tasksState, setTasksState] = useState([]); 

  return (
    <>
      <div className="container-fluid">
        <div className="container m-auto">
          <div className="text-center">
            <h1>Task-list</h1>
          </div>
          <ul className="list-group">
            {currentTasks.length == 0 ? (
              <h6 className="text-center">Tasks will be shown here</h6>
            ) : (
                tasksState.map(item => <li key = {item.id}>{item.value}</li>)
            )}
          </ul>
          <div className="text-center">
            <button
              type="button"
              id="1"
              className="btn btn-dark w-50 custom-button"
              onClick={() => {
                document.getElementById("add-task").style.display = "block";
              }}
            >
              <h4>Add task</h4>
            </button>
          </div>
        </div>
        <div id="add-task">
          <AddTask></AddTask>
        </div>
      </div>
    </>
  );
}

export default App;
