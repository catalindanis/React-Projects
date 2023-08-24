import GameTable  from "./Components/GameTable";

function App() {
  return (
    <>
      <div className="container-fluid text-center bg-dark">
        <h1 className="text-white">Tic Tac Toe</h1>
        <GameTable></GameTable>
      </div>
    </>
  );
}

export default App;
