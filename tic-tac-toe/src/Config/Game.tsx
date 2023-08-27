let table: number[] = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
export const isMarked = (position: string) => {
  if (table[Number(position) - 1] === -1) return false;
  return true;
};

export const setMarked = (position: string) => {
  table[Number(position) - 1] = getCurrentTurn();
  const winner = winnerFound();
  if (winner != -1) {
    console.log(winner);
  }
  changeTurn();
};

let currentTurn = 1;
export const getCurrentTurn = () => {
  return currentTurn;
};

export const changeTurn = () => {
  currentTurn = currentTurn === 0 ? 1 : 0;
};

let currentId = 0;
export const getId = () => {
  return ++currentId / 2;
};

function winnerFound() {
  let v: number[] = [-1, -1, -1];

  //check winner on rows
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) v[j] = table[3 * i + j];
    if (v[0] === v[1] && v[1] === v[2] && v[0] != -1) return v[0];
  }

  //check winner on columns
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) v[i] = table[3 * i + j];
    if (v[0] === v[1] && v[1] === v[2] && v[0] != -1) return v[0];
  }

  //check winner on diag
  for (let i = 0; i < 3; i++) v[i] = table[3 * i + i];
  if (v[0] === v[1] && v[1] === v[2] && v[0] != -1) return v[0];

  for (let i = 0; i < 3; i++) v[i] = table[3 * i + 3 - i - 1];
  if (v[0] === v[1] && v[1] === v[2] && v[0] != -1) return v[0];

  return -1;
}

function showTable() {
  let message = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) message += table[3 * i + j] + " ";
    message += "\n";
  }
  console.log(message);
}
