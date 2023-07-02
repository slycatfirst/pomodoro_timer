let pomodoro_time = document.getElementById("numeric__pomodoro-time").value;
let break_time = document.getElementById("numeric__break-time").value;
let timer_show = document.getElementById("timer");
let start = document.getElementById("start-btn");
let space = document.body;
let container = document.getElementById("contain");
let pomochek = false;
let breakchek = false;

start.addEventListener('click', function() {
     time_minut = parseInt(pomodoro_time) * 60;
     console.log(pomodoro_time);
     pomodoroClass();
     pomochek = true;
     breakchek = true;
     ftimer();
});

function ftimer() {
    if (pomochek) {
        timer = setInterval(function () {
            seconds = time_minut%60; // Получаем секунды
            minuts = time_minut/60%60; // Получаем минуты
            // Условие если время закончилось то...
            if (!breakchek){
                timer_show.innerHTML = '00:00';
            }
            if (time_minut <= 0) {
                // Таймер удаляется
                // Выводит сообщение что время закончилось
                time_minut = parseInt(break_time) * 60;
                clearInterval(timer);
                removepomodoro();
                breakClass();
                beep();
                breakchek = false;
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
                // Выводим строку в блок для показа таймера

            }
            --time_minut; // Уменьшаем таймер
            console.log(time_minut)
        }, 1000);
        if (!breakchek) {
            pomochek = false;
        }
    }
}

function pomodoroClass() {
    start.classList.toggle('pomodoro');
    space.classList.toggle('pomodoro');
    container.classList.toggle('pomodoro');
}
function removepomodoro(){
    start.classList.remove('pomodoro');
    space.classList.remove('pomodoro');
    container.classList.remove('pomodoro');
}
function breakClass() {
    start.classList.toggle('break');
    space.classList.toggle('break');
    container.classList.toggle('break');
}
function beep() {
    let snd = document.getElementById("beep");  
    snd.play();
}