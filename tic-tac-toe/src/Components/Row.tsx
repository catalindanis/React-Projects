import { useState } from "react";
import { Box } from "./Box";
import React from "react";

interface rowProps {
  value: string[];
  id: string[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Row(props: rowProps) {
  let [cell, setCell] = props.value;

  return (
    <div className="container d-flex justify-content-center">
      <Box
        value={cell[0]}
        id={props.id[0]}
        handleClick={props.handleClick}
      ></Box>
      <Box
        value={cell[1]}
        id={props.id[1]}
        handleClick={props.handleClick}
      ></Box>
      <Box
        value={cell[2]}
        id={props.id[2]}
        handleClick={props.handleClick}
      ></Box>
    </div>
  );
}

export default Row;
