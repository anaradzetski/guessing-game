function secondsToMinutesAndSeconds(seconds) {
    return [Math.floor(seconds / 60), seconds % 60];
}

function drawClock() {
    minutesField.textContent = minutes.toString().rjust(2, "0");
    secondsField.textContent = seconds.toString().rjust(2, "0");
}

function initClock() {
    [minutes, seconds] = secondsToMinutesAndSeconds(timeLimit);
    console.log(minutes, seconds);

    if (clock) {
        clearInterval(clock);
        drawClock(minutes, seconds);
    }
    
    function processClock() {
        --seconds;
        if (seconds < 0) {
            seconds = 59;
            --minutes;
        }
        drawClock(minutes, seconds);
        if (minutes === 0 && seconds == 0) {
            showMenuDelayed("Game Over!", "Oops, no time left!")
        }
    }
    clock = setInterval(processClock, 1000);
}