// Day 2 - Stopwatch logic // Did not end up working :( 
let timer = document.getElementById('timer');
let clock = 0;


let hour = 0; // 24 H in 1 D 
let hour_display = 0;
let minute = 0; // 60 M in 1 H 
let minute_display = 0; // 60 M in 1 H 
let second = 0; // 100 S in 1 M 
let second_display = 0; // 100 S in 1 M 
let millisecond = 0; // 1000 MS in 1 S 
let millisecond_display = 0; // 1000 MS in 1 S 

function startTimer() {

    if (millisecond < 1000) {
        for (let mill = 0; mill < 1000; mill++) {
            millisecond++
        }

        // Millisecond Sector
        if (millisecond >= 100 && millisecond < 200) {
            millisecond_display = 1;
        } else if (millisecond >= 200 && millisecond < 300) {
            millisecond_display = 2;
        } else if (millisecond >= 300 && millisecond < 400) {
            millisecond_display = 3;
        } else if (millisecond >= 400 && millisecond < 500) {
            millisecond_display = 4;
        } else if (millisecond >= 500 && millisecond < 600) {
            millisecond_display = 5;
        } else if (millisecond >= 600 && millisecond < 700) {
            millisecond_display = 6;
        } else if (millisecond >= 700 && millisecond < 800) {
            millisecond_display = 7;
        } else if (millisecond >= 800 && millisecond < 900) {
            millisecond_display = 8;
        } else if (millisecond >= 900 && millisecond < 1000) {
            millisecond_display = 9;
        } else if (millisecond === 1000) {
            millisecond = 0;
            millisecond_display = 0;
            second_display++;
        }

        // Second Sector
        if (second >= 100 && second < 200) {
            second_display = 1;
        } else if (second >= 200 && second < 300) {
            second_display = 2;
        } else if (second >= 300 && second < 400) {
            second_display = 3;
        } else if (second >= 400 && second < 500) {
            second_display = 4;
        } else if (second >= 500 && second < 600) {
            second_display = 5;
        } else if (second === 600) {
            second = 0;
            second_display = 0;
            minute_display++
            
        }
    }

    // Minute Sector 

    if (minute >= 100 && minute < 200) {
        minute_display = 1;
    } else if (minute >= 200 && minute < 300) {
        minute_display = 2;
    } else if (minute >= 300 && minute < 400) {
        minute_display = 3;
    } else if (minute >= 400 && minute < 500) {
        minute_display = 4;
    } else if (minute >= 500 && minute < 600) {
        minute_display = 5;
    } else if (minute >= 600 && minute < 700) {
        minute_display = 6;
    } else if (minute >= 700 && minute < 800) {
        minute_display = 7;
    } else if (minute >= 800 && minute < 900) {
        minute_display = 8;
    } else if (minute >= 900 && minute < 1000) {
        minute_display = 9;
    } else if (minute === 1000) {
        minute = 0;
        minute_display = 0;
        hour_display++
    }


    timer.innerHTML = `${hour}${minute_display}:${second_display}${millisecond_display}`;
    requestAnimationFrame(startTimer);
}

function startWatch() {
    startTimer();
}

