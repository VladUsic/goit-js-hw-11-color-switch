'use strict';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const body = document.querySelector('body');
const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');
let timerIdx = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

start.addEventListener('click', handlerStart);
function handlerStart(e) {
    timerIdx = setInterval(changeColor, 1000);
    if (timerIdx !== null) {
        start.disabled = true;
    }
};
function changeColor() {
    const res = randomIntegerFromInterval(0, 5);
    body.style.backgroundColor = colors[res];
};

stop.addEventListener('click', handlerStop);
function handlerStop(e) {
    clearInterval(timerIdx);
    console.log('timerIdx stoped!');
    start.disabled = false
};