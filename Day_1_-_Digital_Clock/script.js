let day = document.getElementById('day');
let h_m_s = document.getElementById('hour');

let DOW = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function timeLoop() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let mi = d.getMilliseconds();

    let day_n = d.getDate();

    if (day_n === 0) {
        day.innerHTML = `Day: ${DOW[0]}`
    } else if (day_n === 1) {
        day.innerHTML = `Day: ${DOW[1]}`
    } else if (day_n === 2) {
        day.innerHTML = `Day: ${DOW[2]}`
    } else if (day_n === 3) {
        day.innerHTML = `Day: ${DOW[3]}`
    } else if (day_n === 4) {
        day.innerHTML = `Day: ${DOW[4]}`
    } else if (day_n === 5) {
        day.innerHTML = `Day: ${DOW[5]}`
    } else if (day_n === 6) {
        day.innerHTML = `Day: ${DOW[6]}`
    }

    h_m_s.innerHTML = `Hour: ${h} Minute: ${m} Second: ${s} Millisecond: ${mi}`

    requestAnimationFrame(timeLoop)
}

timeLoop();