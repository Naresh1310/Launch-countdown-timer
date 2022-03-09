"use strict"

const timeDays = document.querySelector(".time-days")
const timeHours = document.querySelector(".time-hours")
const timeMinutes = document.querySelector(".time-minutes")
const timeSeconds = document.querySelector(".time-seconds")
const body = document.querySelector(".time-holder")

console.log(timeDays)
const timmer = function () {

    let days = "0" + 8;
    let hours = 24;
    let minutes = 59;
    let seconds = 60;

    const currentTimer = setInterval(function () {

        //seconds
        --seconds
        timeSeconds.textContent = seconds

        //minutes
        if (seconds === 0) {
            --minutes
            seconds = 59
        }
        timeMinutes.textContent = minutes

        // Hours
        if (minutes === 0) {
            --hours
            minutes = 59
        }
        timeHours.textContent = hours

        // Days
        if (minutes === 0) {
            --days
        }
        timeDays.textContent = days

        if (days === 0) {
            timeDays.textContent = timeHours.textContent = timeMinutes.textContent = timeSeconds.textContent = 0
            clearInterval(currentTimer)
        }
    }, 1000)
}
timmer()