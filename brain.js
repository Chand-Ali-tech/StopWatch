
let RunPauseBtn = document.querySelector('#StartPause');
let ResetBtn = document.querySelector('#Reset');
let Lap = document.querySelector('#Lap');

let Timer = document.querySelector('.timer');

let MilliSeconds = 0;
let Seconds = 0;
let Minutes = 0;
let Hours = 0;
let LeadingMilliSeconds = 0;
let LeadingSeconds = 0;
let LeadingMinutes = 0;
let LeadingHours = 0;

function StopWatch() {
    MilliSeconds++;
    if (MilliSeconds == 60) {
        MilliSeconds = 0;
        Seconds++;
        if (Seconds == 60) {
            Seconds = 0;
            Minutes++;
            if (Minutes == 60) {
                Minutes = 0;
                Hours++;
            }
        }
    }
    if (MilliSeconds < 10) {
        LeadingMilliSeconds = "0" + MilliSeconds;
    }
    else {
        LeadingMilliSeconds = MilliSeconds;
    }
    if (Seconds < 10) {
        LeadingSeconds = "0" + Seconds;
    }
    else {
        LeadingSeconds = Seconds;
    }
    if (Minutes < 10) {
        LeadingMinutes = "0" + Minutes;
    }
    else {
        LeadingMinutes = Minutes;
    }
    if (Hours < 10) {
        LeadingHours = "0" + Hours;
    }
    else {
        LeadingHours = Hours;
    }
    Timer.innerHTML = LeadingHours + ' : ' + LeadingMinutes + ' : ' + LeadingSeconds + ' : ' + LeadingMilliSeconds;
}
let run = "Stooped";
let intervalId = null;
RunPauseBtn.addEventListener('click', function () {
    if (run == "Stopped") {
        intervalId = setInterval(StopWatch, 10);
        run = "run";
        RunPauseBtn.innerHTML = "Pause"
    }
    else {
        run = "Stopped"
        clearInterval(intervalId);
        RunPauseBtn.innerHTML = "Play";
    }
})
let Array = [];

ResetBtn.addEventListener('click', function () {
    Seconds = 0;
    Minutes = 0;
    Hours = 0;
    LeadingSeconds = 0;
    LeadingMinutes = 0;
    LeadingHours = 0;
    LeadingMilliSeconds = 0;
    MilliSeconds = 0;
    RunPauseBtn.innerHTML = "Play";
    clearInterval(intervalId);
    Timer.innerHTML = "00 : 00 : 00 : 00 ";
    Array = [];
    document.querySelector('#Durations').innerHTML = " ";
})
Lap.addEventListener('click', function () {
    var lapTime = LeadingMinutes + ' : ' + LeadingSeconds + ' : ' + LeadingMilliSeconds;
    Array.push(lapTime);

    var lapTimeList = '';
    document.querySelector('#Durations').innerHTML = " ";
    for (var a = 0; a < Array.length; a++) {
        lapTimeList = lapTimeList + '<div>' + Array[a] + '</div>';
    }

    document.querySelector('#Durations').innerHTML = lapTimeList;
})
