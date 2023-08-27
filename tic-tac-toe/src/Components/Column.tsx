import { useState } from "react";
import { getCurrentTurn, getId, isMarked, setMarked } from "../Config/Game";

function Column() {
  let [value, setValue] = useState(-1);

  return (
    <>
      <div className="custom-container">
        <button
          type="button"
          id={getId().toString()}
          className={
            value === -1
              ? "btn w-100 h-100 btn-light"
              : value === 0
              ? "btn w-100 h-100 btn-danger"
              : "btn w-100 h-100 btn-success"
          }
          onClick={(e) => {
            markTurn(e.currentTarget.id, setValue);
          }}
        ></button>
      </div>
    </>
  );
}

export default Column;

function markTurn(
  position: string,
  setValue: React.Dispatch<React.SetStateAction<number>>
) {
  if (isMarked(position)) return;
  setValue(getCurrentTurn());
  setMarked(position);
}
