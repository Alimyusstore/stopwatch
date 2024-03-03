//Variables
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variables for Timer

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading Timer

let leadSeconds = 0;
let leadMinutes = 0;
let leadHours = 0;

// Variables for Interval & status

let timerInterval = null;
let timerStatus = 'stopped';

function stopWatch() {

    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    
    if (seconds < 10) {
        leadSeconds = '0' + seconds.toString();
    } else{ 
        leadSeconds = seconds;
    }
    
    if (minutes < 10) {
        leadMinutes = '0' + minutes.toString();
    } else{ 
        leadMinutes = minutes;
    }
    
    if (hours < 10) {
        leadHours = '0' + hours.toString();
    } else{ 
        leadHours = hours;
    }
    
let displayTimer = document.getElementById('timer').innerText = leadHours + ':' + leadMinutes + ':' + leadSeconds;
}



startStopBtn.addEventListener('click', function(){
    if (timerStatus === 'stopped'){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = <i class = "fa-solid fa-pause" id = "pause"></i>;
        timerStatus = 'started';
} else {
    window.clearInterval(stopWatch, 1000);
    document.getElementById('startStopBtn').innerHTML = <i class = "fa-solid fa-play" id = 'play'></i>
    timerStatus = 'stopped';
}

resetBtn.addEventListener('click', function(){
    window.clearInterval(stopWatch, 1000);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = '00:00:00';
})
})