const initMoves = () => {
    moves = 0;

    movesField.textContent = 0;
    maxMovesField.textContent = maxMoves;
}

const incrementMoves = () => {
    ++moves;
    movesField.textContent = moves.toString().rjust(2, "0");
}
