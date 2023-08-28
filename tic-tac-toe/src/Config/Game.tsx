let table: number[] = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
export let RESET = false;

export const isMarked = (position: string) => {
  if (table[Number(position)] === -1) return false;
  return true;
};

export const setMarked = (position: string) => {
  table[Number(position)] = getCurrentTurn();
  changeTurn();
  if (winnerFound() != -1) {
    setTimeout(() => {
      alert("NICE!")
      resetTable();
    },1000)
  }
};

let currentTurn = 1;
export const getCurrentTurn = () => {
  return currentTurn;
};

export const changeTurn = () => {
  currentTurn = currentTurn === 0 ? 1 : 0;
};

export const winnerFound = () => {
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
};

export const resetTable = () => {
  RESET = true;
  for (let i = 0; i < 9; i++) {
    (document.getElementById(String(i)) as HTMLFormElement).click();
    table[i] = -1;
  }
  RESET = false;
};
