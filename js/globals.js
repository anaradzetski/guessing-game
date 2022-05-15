const emojis = [
    "🫀", "🧠", "🦷",
    "🕵️", "🎅", "👼",
    "🤰", "👹", "👺",
    "🤡", "💩", "🧑‍🎤"
]

let curLevel = 1;
const levels = [
    {
        emojis: 3,
        timeLimit: 20,
        maxMoves: 10
    },
    {
        emojis: 6,
        timeLimit: 30,
        maxMoves: 16
    },
    {
        emojis: 12,
        timeLimit: 70,
        maxMoves: 36
    }
]

let emojisNum;
let cardsNum;

let moves;
let maxMoves;
let movesField = document.querySelector("#moves");
let maxMovesField = document.querySelector("#maxMoves");

let clock;
let minutes;
let seconds;
let timeLimit;
const minutesField = document.querySelector("#minutes");
const secondsField = document.querySelector("#seconds");

const menuPage = document.querySelector(".menu")
const menuHeader = document.querySelector("#menu-header");
const menuMessage = document.querySelector("#menu-message")
const initButton = document.querySelector("#init");
const nextLevelButton = document.querySelector("#nextLevel");
