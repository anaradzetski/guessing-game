function showMenu(
    header,
    text,
    showNextLevelButton = false
) {
    clearInterval(clock);

    menuHeader.textContent = header;
    menuMessage.textContent = text;
    menuPage.classList.remove("invisible");
    initButton.textContent = "restart";
    if (showNextLevelButton) {
        nextLevelButton.classList.remove("invisible");
    } else {
        nextLevelButton.classList.add("invisible");
    }
    menuPage.classList.remove("invisible");
}

function showMenuDelayed(header, text, showNextLevelButton) {
    setInterval(showMenu(header, text, showNextLevelButton), 1000);
}

function hideMenu() {
    menuPage.classList.add("invisible");
}
