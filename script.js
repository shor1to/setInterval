let timer;
const button = document.querySelector(".startBtn");

function startTimer() {
    const input = document.querySelector(".second").value;
    let seconds;

    if (/^\d+$/.test(input)) {
        seconds = parseInt(input);

        if (seconds > 0) {
            if (timer) {
                clearInterval(timer);
            }
            const timerValue = document.querySelector(".timer");    
            timerValue.textContent = seconds;

            timer = setInterval(function() {
                seconds--;
                timerValue.textContent = seconds;

                if (seconds <= 0) {
                    clearInterval(timer);
                }
            }, 1000);
        } 
    } else {
        alert("Введите целое положительное число!");
        document.querySelector(".second").value = "";
    }
}

button.addEventListener("click", startTimer);

document.querySelector(".second").addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        startTimer();
    }
});





const input = document.querySelector(".input");
const h2 = document.querySelector(".text");
let timeOut;

const replaceText = () => {
    h2.textContent = input.value
}

const outputText = () => {
    timeOut = clearTimeout(timeOut);
    timeOut = setTimeout(replaceText, 300)
}

input.addEventListener("input", outputText)
