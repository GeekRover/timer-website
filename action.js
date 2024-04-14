let timer;
let isTimerRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
    isTimerRunning = true;
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    isTimerRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return (number < 10) ? '0' + number : number;
}

document.getElementById('startStop').addEventListener('click', () => {
    if (isTimerRunning) {
        stopTimer();
        document.getElementById('startStop').textContent = 'Start';
    } else {
        startTimer();
        document.getElementById('startStop').textContent = 'Stop';
    }
});

document.getElementById('reset').addEventListener('click', resetTimer);

