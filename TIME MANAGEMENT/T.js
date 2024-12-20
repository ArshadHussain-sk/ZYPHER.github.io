let timer;
let timeLeft = 1500; 
let selectedCell = null; 

const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const setTimerButton = document.getElementById('setTimerButton');
const timetable = document.getElementById('timetable');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (timer) return; 
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            timer = null;
            alert("Time's up!");
            resetTimer();
            if (selectedCell) {
                const timerDiv = selectedCell.querySelector('.timer-display');
                if (timerDiv) {
                    timerDiv.remove(); 
                }
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    timeLeft = 1500;
    updateDisplay();
}

function setTimer() {
    if (selectedCell) {
        const timeSlot = selectedCell.parentElement.firstChild.textContent;
        const taskName = selectedCell.textContent;

        
        const timerDiv = document.createElement('div');
        timerDiv.className = 'timer-display';
        timerDiv.textContent = `Timer for ${taskName} during ${timeSlot}: 25:00`;
        
        
        const existingTimerDiv = selectedCell.querySelector('.timer-display');
        if (existingTimerDiv) {
            existingTimerDiv.remove();
        }
        
        selectedCell.appendChild(timerDiv);
        startTimer();
    } else {
        alert("Please select a time slot first.");
    }
}

timetable.addEventListener('click', (event) => {
    if (event.target.tagName === 'TD' && event.target.contentEditable === "true") {
        const previouslySelected = document.querySelector('.selected');
        if (previouslySelected) {
            previouslySelected.classList.remove('selected');
        }
        event.target.classList.add('selected');
        selectedCell = event.target; 
    }
});

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
setTimerButton.addEventListener('click', setTimer);

updateDisplay();
