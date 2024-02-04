const clock = document.getElementById('clock');
function printTime() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, 0);
    const min = String(now.getMinutes()).padStart(2, 0);
    const second = String(now.getSeconds()).padStart(2, 0);

    clock.innerHTML = `${hour}:${min}:${second}`;
}

setInterval(printTime, 1000);
window.addEventListener('load', printTime);