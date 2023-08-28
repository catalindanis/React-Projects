import Row from "./Row";

function GameTable() {
  return (
    <>
      <Row id={["0", "1", "2"]}></Row>
      <Row id={["3", "4", "5"]}></Row>
      <Row id={["6", "7", "8"]}></Row>
    </>
  );
}

export default GameTable;
