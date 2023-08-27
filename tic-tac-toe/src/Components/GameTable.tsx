import Row from "./Row";
import { useState } from "react";
import { boxProps } from "./Box";

function GameTable(props: boxProps) {
  let [cell, setCell] = useState([
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
    "-1",
  ]);
  let values = cell;

  return (
    <>
      <Row
        value={cell}
        id={["0", "1", "2"]}
        handleClick={(e) => {
          values[parseInt(e.currentTarget.id)] = "0";
          setCell(values);
        }}
      ></Row>
      {/* <Row value={cell} id={["3", "4", "5"]} handleClick={(e) => {}}></Row> */}
      {/* <Row value={cell} id={["6", "7", "8"]} handleClick={(e) => {}}></Row> */}
    </>
  );
}

export default GameTable;
