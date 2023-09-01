// get elements

const nextYearDisplay = document.querySelector("h2");
const numDaysDisplay = document.querySelector("#numDays");
const numHoursDisplay = document.querySelector("#numHours");
const numMinutesDisplay = document.querySelector("#numMinutes");
const numSecondsDisplay = document.querySelector("#numSeconds");

// functions

// always shows to digits
function alwaysTwoDigits(num) {
  return num < 10 ? "0" + num : num;
}

function timeToNewYear() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const nextYear1stJan = new Date(nextYear, 0, 1);
  const timeRemaining = nextYear1stJan - now;
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;
  const second = 1000;
  const daysRemaining = Math.floor(timeRemaining / day);
  const hoursRemainig = Math.floor((timeRemaining % day) / hour);
  const minutesRemainng = Math.floor((timeRemaining % hour) / minute);
  const secondsRemainig = Math.floor((timeRemaining % minute) / second);
  nextYearDisplay.textContent = alwaysTwoDigits(nextYear);
  numDaysDisplay.textContent = alwaysTwoDigits(daysRemaining);
  numHoursDisplay.textContent = alwaysTwoDigits(hoursRemainig);
  numMinutesDisplay.textContent = alwaysTwoDigits(minutesRemainng);
  numSecondsDisplay.textContent = alwaysTwoDigits(secondsRemainig);
}

// init
setInterval(timeToNewYear, 100);
