// Day 3 - Countdown Timer logic
const countDownP = document.getElementById('countDown');
const countInput = document.getElementById('inputCountdown');


function startCountdown() {

    countDownP.innerHTML = `Number: ${countInput.value}`


    if (countInput.value > 0) {
        countInput.value--
    } else {
        countInput = 0; 
    }

    requestAnimationFrame(startCountdown)
}
