import { useState } from "react";
import { DISABLED, RESET, getCurrentTurn, isMarked, setMarked } from "../Config/Game";

function Box(prop: { id: string }) {
  let [value, setValue] = useState(-1);

  return (
    <>
      <div className="custom-container">
        <button
          type="button"
          key={prop.id}
          id={prop.id}
          className={
            value === -1
              ? "btn w-100 h-100 btn-light"
              : value === 0
              ? "btn w-100 h-100 btn-danger"
              : "btn w-100 h-100 btn-success"
          }
          onClick={(e) => {

            if (RESET) {
              setValue(-1);
              return;
            }
            if (isMarked(e.currentTarget.id)) return;

            if(!DISABLED)
            setValue(getCurrentTurn());
            setMarked(e.currentTarget.id);
          }}
        ></button>
      </div>
    </>
  );
}

export default Box;
