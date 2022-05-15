function initLevelVariables() {
    level = levels[curLevel - 1];
    emojisNum = level.emojis;
    cardsNum = emojisNum * 2;
    timeLimit = level.timeLimit;
    maxMoves = level.maxMoves;
}

function initGame() {
    hideMenu();
    
    initLevelVariables();

    initClock();
    initMoves();

    drawEmojis();

    document.querySelectorAll(".card").forEach(
        (e) => {
            e.addEventListener("click", reverse);
        }
    )
}

initButton.addEventListener("click", initGame);
nextLevelButton.addEventListener("click", () => {
    ++curLevel;
    initGame();
});
