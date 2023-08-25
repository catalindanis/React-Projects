let currentMove = 1;

function getCurrentMove(){
    currentMove = currentMove === 1 ? 0 : 1;
    return currentMove === 1 ? 0 : 1;
}

export default getCurrentMove;