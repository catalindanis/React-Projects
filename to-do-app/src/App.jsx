import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Task from "./Components/Task";
import AddTask from "./Components/AddTask";

export let task = {
  title: "",
  description: "",
};

let ADD = false;

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
          <ul
            id="list-group"
            className="list-group"
            onClick={() => {
              if (ADD) setTasksState(currentTasks);
            }}
          >
            {tasksState.length == 0 ? (
              <h6 className="text-center">Tasks will be shown here</h6>
            ) : (
              tasksState.map((item, i) => {
                return (
                  <li key={i} className="list-group-item custom-item">
                    <Task
                      title={item.title}
                      description={item.description}
                    ></Task>
                  </li>
                );
              })
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

export function updateList() {
  ADD = true;
  document.getElementById("list-group").click();
  ADD = false;
}
