'use strict';

function cons(func) {
    console.log(func);
}

let span = document.querySelectorAll('.clock span');

function clock(){
    let clockHours = new Date().getHours();
    span[0].innerHTML = clockHours;
    if(clockHours < 10) span[0].innerHTML = '0' + clockHours;

    let clockMinutes = new Date().getMinutes();
    span[1].innerHTML = clockMinutes;
    if(clockMinutes < 10) span[1].innerHTML = '0' + clockMinutes;

    let clockSecond = new Date().getSeconds();
    span[2].innerHTML = clockSecond;
    if(clockSecond < 10) span[2].innerHTML = '0' + clockSecond;
}

let timerId = setInterval(clock, 1000)

