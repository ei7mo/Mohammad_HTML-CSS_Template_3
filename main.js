// Fill the our skills
let ourSkillsDiv = document.querySelector(".our-skills");
let skills = document.querySelectorAll(".skills .progress span");
let start = false;

window.addEventListener("scroll", () => {
  const triggerPoint = ourSkillsDiv.offsetTop - window.innerHeight;
  if (window.scrollY >= triggerPoint && !start) {
    start = true;
    skills.forEach(fillWidth);
  }
});

function fillWidth(skill) {
  const goal = parseInt(skill.dataset.width, 10);
  let current = 0;
  const filling = setInterval(() => {
    current++;
    skill.style.width = `${current}%`;
    if (current >= goal) clearInterval(filling);
  }, 20);
}

// Count number of stats
let statsSection = document.querySelector(".stats");
let numbers = document.querySelectorAll(".box .number");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(num) {
  let goal = num.dataset.goal;
  let count = setInterval(() => {
    num.textContent++;

    if (num.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// Set count down of events
let countDownDate = new Date("Dec 31, 2026 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
