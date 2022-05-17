const getEmojisList = () => {
    levelEmojis = emojis.slice(0, emojisNum);
    doubledLevelEmojis = levelEmojis.concat(levelEmojis);
    return doubledLevelEmojis.sort(() => {
        return 0.5 - Math.random();
    })
}

let deck = document.querySelector("#deck-container");

const drawEmojis = () => {
    rearrangedEmojis = getEmojisList();
    deck.innerHTML = "";
    rearrangedEmojis.forEach(emoji => {
        card = document.createElement("div")
        card.className = "card";
        card.setAttribute("data-value", emoji);

        cardContent = document.createElement("div");
        cardContent.className = "cardContent";
        cardContent.innerHTML = emoji;

        card.appendChild(cardContent);

        deck.appendChild(card);
    })
}
