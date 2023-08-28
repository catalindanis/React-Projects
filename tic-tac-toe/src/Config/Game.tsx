let table: number[] = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
export let RESET = false;
export let CHANGE_TURN = false;
export let DISABLED = false;
export let CHANGE_SCORE = false;
let nrOfMoves = 0;

export const isMarked = (position: string) => {
  if (table[Number(position)] === -1) return false;
  return true;
};

export const setMarked = (position: string) => {
  table[Number(position)] = getCurrentTurn();
  nrOfMoves++;
  changeTurn();
  const winner = winnerFound();
  if (winner) {
    DISABLED = true;
    setTimeout(() => {
      resetTable();
      DISABLED = false;
    }, 600);
  }
};

let currentTurn = 1;
export const getCurrentTurn = () => {
  return currentTurn;
};

export const changeTurn = () => {
  CHANGE_TURN = true;
  currentTurn = currentTurn === 0 ? 1 : 0;
  (document.getElementById("turn") as HTMLFormElement).click();
  CHANGE_TURN = false;
};

export const winnerFound = () => {
  let v: number[] = [-1, -1, -1];
  let p: number[] = [-1, -1, -1];
  let winner = false;
  //check winner on rows
  for (let i = 0; i < 3 && !winner; i++) {
    for (let j = 0; j < 3 && !winner; j++) {
      v[j] = table[3 * i + j];
      p[j] = 3 * i + j;
    }
    if (v[0] === v[1] && v[1] === v[2] && v[0] != -1) winner = true;
  }

  //check winner on columns
  for (let j = 0; j < 3 && !winner; j++) {
    for (let i = 0; i < 3 && !winner; i++) {
      v[i] = table[3 * i + j];
      p[i] = 3 * i + j;
    }
    if (v[0] === v[1] && v[1] === v[2] && v[0] != -1) winner = true;
  }

  //check winner on diag
  for (let i = 0; i < 3 && !winner; i++) {
    v[i] = table[3 * i + i];
    p[i] = 3 * i + i;
  }
  if (v[0] === v[1] && v[1] === v[2] && v[0] != -1) winner = true;

  for (let i = 0; i < 3 && !winner; i++) {
    v[i] = table[3 * i + 3 - i - 1];
    p[i] = 3 * i + 3 - i - 1;
  }
  if (v[0] === v[1] && v[1] === v[2] && v[0] != -1) winner = true;

  if (winner) {
    animateWin(p);
    updateScore(v[0]);
    return 1;
  } else if (nrOfMoves === 9) {
    animateWin([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    return 1;
  }

  return 0;
};

function animateWin(position: number[]) {
  for (let i = 0; i < position.length; i++)
    (
      document.getElementById(String(position[i])) as HTMLFormElement
    ).style.animation = "mark 1s linear";
  setTimeout(() => {
    for (let i = 0; i < position.length; i++)
      (
        document.getElementById(String(position[i])) as HTMLFormElement
      ).style.animation = "";
  }, 1000);
}

function updateScore(winner: number) {
  CHANGE_SCORE = true;
  switch (winner) {
    case 0:
      //red wins
      (document.getElementById("red") as HTMLFormElement).click();
      break;
    case 1:
      //green wins
      (document.getElementById("green") as HTMLFormElement).click();
      break;
  }
  CHANGE_SCORE = false;
}

export const resetTable = () => {
  nrOfMoves = 0;
  RESET = true;
  for (let i = 0; i < 9; i++) {
    (document.getElementById(String(i)) as HTMLFormElement).click();
    table[i] = -1;
  }
  RESET = false;
};

export const resetTableHandler = () => {
  animateWin([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  nrOfMoves = 0;
  RESET = true;
  for (let i = 0; i < 9; i++) {
    (document.getElementById(String(i)) as HTMLFormElement).click();
    table[i] = -1;
  }
  RESET = false;
};
