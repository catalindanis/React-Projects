import React from "react";
import { useState } from "react";
import { deleteItem } from "../App";

function Task(prop: { title: string, description: string, itemId: string}) {

  const [finished, setFinished] = useState("✓"); 
  const id = crypto.randomUUID();

  return (
    <>
      <div id={id} className="container custom-margin">
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
                if (document.getElementById(id)!.style.opacity == "1" || document.getElementById(id)!.style.opacity == "") {
                  document.getElementById(id)!.style.opacity = "0.6";
                  setFinished("↺")
                } else {
                  document.getElementById(id)!.style.opacity = "1";
                  setFinished("✓");
                }
              }}
            >
              <h1 id={id + "btn"} className="text-dark opacity">
                <b>{finished}</b>
              </h1>
            </button>
            <button
              type="button"
              className="btn btn-danger custom-size custom-pos"
              onClick={()=> {
                deleteItem(prop.itemId);
              }}
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