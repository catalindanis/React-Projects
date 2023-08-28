import { useState } from "react";
import GameTable from "./Components/GameTable";
import { getCurrentTurn } from "./Config/Game";

function App() {
  let [player1, setPlayer1] = useState(0);
  let [player2, setPlayer2] = useState(0);
  let [turn, setTurn] = useState(getCurrentTurn());

  return (
    <>
      <div className="container-fluid bg-dark full-height">
        <div className="container text-center bg-dark">
          <h1 className="text-white">Tic Tac Toe</h1>
          <GameTable></GameTable>
          <h2 className={turn === 1 ? "green" : "red"}>
            {turn === 1 ? "Green's turn." : "Red's turn."}
          </h2>
          <div className="container text-center score">
            <h2 className="red">Red : {player1}</h2>
            <h2 className="green">Green : {player2}</h2>
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
