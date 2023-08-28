import { useState } from "react";
import GameTable from "./Components/GameTable";
import { CHANGE_SCORE, CHANGE_TURN, getCurrentTurn } from "./Config/Game";

function App() {
  let [red, setRed] = useState(0);
  let [green, setGreen] = useState(0);
  let [turn, setTurn] = useState(getCurrentTurn());

  return (
    <>
      <div className="container-fluid bg-dark full-height">
        <div className="container text-center bg-dark">
          <h1 className="text-white">Tic Tac Toe</h1>
          <GameTable></GameTable>
          <h2
            className={turn === 1 ? "green" : "red"}
            id="turn"
            onClick={() => {
              if (CHANGE_TURN) setTurn(turn === 1 ? 0 : 1);
            }}
          >
            {turn === 1 ? "Green's turn." : "Red's turn."}
          </h2>
          <div className="container text-center score">
            <h2
              className="red"
              id="red"
              onClick={() => {
                if (CHANGE_SCORE) setRed(red + 1);
              }}
            >
              Red : {red}
            </h2>
            <h2
              className="green"
              id="green"
              onClick={() => {
                if (CHANGE_SCORE) setGreen(green + 1);
              }}
            >
              Green : {green}
            </h2>
          </div>
          <div className="container text-center menu">
            <button type="button" className="btn btn-secondary btn-custom">
              <h3>Reset Table</h3>
            </button>
            <button type="button" className="btn btn-warning btn-custom">
              <h3>Reset Score</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
