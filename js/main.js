let pomodoro_time = document.getElementById("numeric__pomodoro-time").value;
let break_time = document.getElementById("numeric__break-time").value;
let timer_show = document.getElementById("timer");
let start = document.getElementById("start-btn");
let space = document.body;
let container = document.getElementById("contain");
let btn_text = document.getElementById('button-text');
let timer_stop = false;
let breakchek = true;

timer_show.innerHTML = `${Math.trunc(pomodoro_time)}:00`;

start.addEventListener('click', function() {
    if (btn_text.innerHTML != "Stop") {
        timer_stop = true;
        ftimer();
        pomodoroClass();
        
    } else {
        timer_stop = false;
        console.log("stop")
    }
});

function ftimer() {
    if (breakchek) {
        time_minut = parseInt(pomodoro_time)*60;
    }
        timer = setInterval(function () {
            seconds = time_minut%60; // Получаем секунды
            minuts = time_minut/60%60; // Получаем минуты
            // Условие если время закончилось то...
            if (!timer_stop){
                timer_show.innerHTML = `${Math.trunc(pomodoro_time)}:00`;
                removepomodoro();
                return;
            }
            if (time_minut <= 0) {
                // Таймер удаляется
                // Выводит сообщение что время закончилось
                time_minut = parseInt(break_time) * 60;
                console.log(breakchek)
                clearInterval(timer);
                breakClass();
                beep();
                ftimer();
            } else { // Иначе
                // Создаём строку с выводом времени
                if (minuts < 10) {
                    let strTimer = `0${Math.trunc(minuts)}:${seconds}`;
                    timer_show.innerHTML = strTimer;
                }
                if (seconds < 10) {
                    let strTimer = `${Math.trunc(minuts)}:0${seconds}`;
                    timer_show.innerHTML = strTimer;
                }
                if (minuts < 10 && seconds < 10) {
                    let strTimer = `0${Math.trunc(minuts)}:0${seconds}`;
                    timer_show.innerHTML = strTimer;
                } 
                if (minuts >= 10 && seconds >= 10) {
                    let strTimer = `${Math.trunc(minuts)}:${seconds}`;
                    timer_show.innerHTML = strTimer;
                }
                // Выводим строку в блок для показа таймера

            }
            --time_minut; // Уменьшаем таймер
            console.log(time_minut)
        }, 1000);
    
}

document.getElementById("pomodoro-minus").addEventListener('click', function(){
    if (pomodoro_time > 5 && !timer_stop) {
        let count = pomodoro_time;
        count = parseInt(pomodoro_time) - 5;
        document.getElementById("numeric__pomodoro-time").value = `${Math.trunc(count)}`;
        timer_show.innerHTML = `${Math.trunc(count)}:00`;
        pomodoro_time = count;
    }
});
document.getElementById("pomodoro-plus").addEventListener('click', function(){
    if (pomodoro_time < 55 && !timer_stop) {
        let count = pomodoro_time;
        count = parseInt(pomodoro_time) + 5;
        document.getElementById("numeric__pomodoro-time").value = `${Math.trunc(count)}`;
        timer_show.innerHTML = `${Math.trunc(count)}:00`;
        pomodoro_time = count;
    }
});
document.getElementById("break-minus").addEventListener('click', function(){
    if (break_time > 5 && !timer_stop) {
        let count = break_time;
        count = parseInt(break_time) - 5;
        document.getElementById("numeric__break-time").value = `${Math.trunc(count)}`;
        break_time = count;
    }
});
document.getElementById("break-plus").addEventListener('click', function(){
    if (break_time < 55 && !timer_stop) {
        let count = break_time;
        count = parseInt(break_time) + 5;
        document.getElementById("numeric__break-time").value = `${Math.trunc(count)}`;
        break_time = count;
    }
});

function pomodoroClass() {
    start.classList.toggle('pomodoro');
    space.classList.toggle('pomodoro');
    container.classList.toggle('pomodoro');
    btn_text.innerHTML = "Stop";
}
function removepomodoro(){
    start.classList.remove('pomodoro');
    space.classList.remove('pomodoro');
    container.classList.remove('pomodoro');
    btn_text.innerHTML = "Start";
}
function breakClass() {
    start.classList.toggle('break');
    space.classList.toggle('break');
    container.classList.toggle('break');
    breakchek = !breakchek;
}
function beep() {
    let snd = document.getElementById("beep");  
    snd.play();
}