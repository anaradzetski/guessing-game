const reverse = (e) => {
    const reversedFilter = ".reversed:not(.success):not(.cardContent)";
    let reversedCards = document.querySelectorAll(reversedFilter);
    if (reversedCards.length >= 2) {
        return;
    }

    card = e.target;
    card.classList.add("reversed");

    reversedCards = document.querySelectorAll(reversedFilter);
    if (reversedCards.length < 2) {
        return;
    }
    incrementMoves();
    compare(reversedCards);
    checkState();
}


const compare = cards => {
    if (cards[0].dataset.value === cards[1].dataset.value) {
        success(cards);
        return;
    }
    failure(cards);
}

const success = cards => {
    cards.forEach(card => {
        card.classList.add("success");
    })
}

const failure = cards => {
    cards.forEach(card => {
        card.classList.add("failure");
    })
    setTimeout(() => {
        cards.forEach(card => {
            card.classList.remove("reversed");
            card.classList.remove("failure");
        })
    }, 500)
}

function checkMoves() {
    if (moves == maxMoves) {
        showMenuDelayed("Game Over!", "Oops, no moves left!");
    }
}

function checkWinningCondition() {
    succededCards = document.querySelectorAll(".card.success").length;
    if (succededCards === cardsNum) {
        showMenuDelayed("Level finished", "You won!", true);
    }
}

const checkState = () => {
    checkWinningCondition();
    checkMoves();
}
