import React from "react";
import { updateList } from "../App";
import { useState } from "react";

function AddTask() {
  return (
    <>
      <div className="full-size">
        <div className="align-center custom-container">
          <div
            className="close-button"
            onClick={() => {
              closeWindow();
            }}
          >
            <h2 className="disable-text">X</h2>
          </div>
          <div className="form-group">
            <h1 className="form-title">Title</h1>
            <input id="title" type="text" className="w-100 custom-font" />
          </div>
          <div className="form-group">
            <h1 className="form-title">Description</h1>
            <input id="description" type="text" className="w-100 custom-font" />
          </div>
          <button
            type="button"
            className="btn btn-warning custom-button"
            onClick={() => {
              closeWindow();
              updateList(
                document.getElementById("title").value,
                document.getElementById("description").value
              );
              document.getElementById("title").value = "";
              document.getElementById("description").value = "";
            }}
          >
            <h3>Add task</h3>
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTask;

function closeWindow() {
  document.getElementById("add-task").style.animation = "hide 0.2s";
  setTimeout(() => {
    document.getElementById("add-task").style.animation = "load 0.2s";
    document.getElementById("add-task").style.display = "none";
  }, 200);
}
