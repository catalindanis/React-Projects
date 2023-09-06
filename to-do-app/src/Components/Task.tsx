import React from "react";
import { useState } from "react";

function Task(prop: { title: string; description: string; id: string }) {

  const [finished, setFinished] = useState("✓"); 

  return (
    <>
      <div id={prop.id} className="container custom-margin">
        <div className="row">
          <div className="col-10">
            <div className="w-50 text-break">
              <h1>{prop.title}</h1>
            </div>
            <div className="w-75 text-break">
              <h5>{prop.description}</h5>
            </div>
          </div>
          <div className="d-flex vertical-center">
            <button
              type="button"
              className="btn btn-success custom-size custom-pos"
              onClick={() => {
                if (document.getElementById(prop.id)!.style.opacity == "1" || document.getElementById(prop.id)!.style.opacity == "") {
                  document.getElementById(prop.id)!.style.opacity = "0.6";
                  setFinished("↺")
                } else {
                  document.getElementById(prop.id)!.style.opacity = "1";
                  setFinished("✓");
                }
              }}
            >
              <h1 id={prop.id + "btn"} className="text-dark opacity">
                <b>{finished}</b>
              </h1>
            </button>
            <button
              type="button"
              className="btn btn-danger custom-size custom-pos"
              onClick={deleteHandler}
            >
              <h1 className="text-dark">X</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;

function deleteHandler() {}
