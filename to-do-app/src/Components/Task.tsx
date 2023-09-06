import React from "react";

function Task(prop: { title: string; description: string }) {
  return (
    <>
      <div className="container custom-margin">
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
            >
              <h1 className="text-dark">
                <b>✓</b>
              </h1>
            </button>
            <button
              type="button"
              className="btn btn-danger custom-size custom-pos"
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
