let table:number[] = [0,0,0,0,0,0,0,0,0];
export const isMarked = (position: string) => {
    if(table[Number(position)-1] === 0)
        return false;
    return true;
};

export const setMarked = (position: string, value: number) => {
    table[Number(position)-1] = value;
}

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
