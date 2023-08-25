import { useState } from "react";
import getCurrentMove from "../Config/Move";

function Column() {
  let [value, setValue] = useState(-1);

  return (
    <>
      <div className="custom-container">
        <button
          type="button"
          className={
            value === -1
              ? "btn w-100 h-100 btn-light"
              : value === 0
              ? "btn w-100 h-100 btn-danger"
              : "btn w-100 h-100 btn-success"
          }
          onClick={() => {
            setValue(getCurrentMove());
          }}
        ></button>
      </div>
    </>
  );
}

export default Column;
