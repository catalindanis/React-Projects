import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Task from "./Components/Task";
import AddTask from "./Components/AddTask";

function App() {
  return (
    <>
      <div clasName="container-fluid">
        <div className="container m-auto">
          <div className="text-center">
            <h1>Task-list</h1>
          </div>
          <ul class="list-group">
            <li class="list-group-item custom-item">
              <Task></Task>
            </li>
          </ul>
        </div>
        <AddTask></AddTask>
      </div>
    </>
  );
}

export default App;
