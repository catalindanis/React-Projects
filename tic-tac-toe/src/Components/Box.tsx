import React from "react";
import { useState } from "react";

interface boxProps {
  [value, setValue]: 
  id: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Box = (props: boxProps) => {
  let [cell, setCell] = props.value;

  return (
    <>
      <div className="custom-container">
        <button
          type="button"
          id={props.id}
          className={
            cell === "-1"
              ? "btn w-100 h-100 btn-light"
              : cell === "1"
              ? "btn w-100 h-100 btn-danger"
              : "btn w-100 h-100 btn-success"
          }
          onClick={props.handleClick}
        ></button>
      </div>
    </>
  );
};

export default Box;
