"use strict";

let button = document.querySelector(".arrow");
let day_input = document.querySelector(".day-input");
let month_input = document.querySelector(".month-input");
let year_input = document.querySelector(".year-input");
let target_day = document.querySelector(".day");
let target_month = document.querySelector(".month");
let target_year = document.querySelector(".year");

let inputed_day;
let inputed_month;
let inputed_year;
let all_inputs = [0, 0, 0];

let months = {
  1: 31,
  2: 28,
  3: 31,
  4: 31,
  5: 31,
  6: 30,
  7: 30,
  8: 30,
  9: 31,
  11: 30,
  12: 31,
  currentYear: 2023,
  min_year: 1000,
  currentmonth: Number(prompt("please enter cuurent month \n IN NUMBER ☺")),
};

// ==action btn
button.addEventListener("click", checkvalues);

// ====check month function
function checkvalues() {
  if (isNaN(months.currentmonth) || months.currentmonth > 12) {
    months.currentmonth = Number(
      prompt("valid current month should be in NUMBER ☺")
    );
    2;
  }

  if (month_input.value === "") {
    document.querySelector(".name_month").style.color = "hsl(0, 100%, 67%)";
    document.querySelector(`.month-box .invalid-Err`).classList.add("remove");
    document.querySelector(`.month-box .em-Err`).classList.remove("remove");
  } else if (
    isNaN(Number(month_input.value)) ||
    Number(month_input.value) > 12 ||
    Number(month_input.value) === 0
  ) {
    document.querySelector(".name_month").style.color = "hsl(0, 100%, 67%)";
    document.querySelector(`.month-box .em-Err`).classList.add("remove");
    document
      .querySelector(`.month-box .invalid-Err`)
      .classList.remove("remove");
  } else {
    document.querySelector(".name_month").style.color = "hsl(0, 1%, 44%)";
    document.querySelector(`.month-box .invalid-Err`).classList.add("remove");
    document.querySelector(`.month-box .em-Err`).classList.add("remove");
    inputed_month = Number(parseInt(month_input.value));
    all_inputs[1] = inputed_month;
    checkday(inputed_month);
  }
}

// =====check day function
function checkday(inputed_month) {
  let day = months[inputed_month];

  if (day_input.value === "") {
    document.querySelector(".name_day").style.color = "hsl(0, 100%, 67%)";
    document.querySelector(`.day-box .invalid-Err`).classList.add("remove");
    document.querySelector(`.day-box .em-Err`).classList.remove("remove");
  } else if (
    isNaN(Number(day_input.value)) ||
    Number(day_input.value) > day ||
    Number(day_input.value) < 0 ||
    Number(day_input.value) === 0
  ) {
    document.querySelector(".name_day").style.color = "hsl(0, 100%, 67%)";
    document.querySelector(`.day-box .invalid-Err`).classList.remove("remove");
    document.querySelector(`.day-box .em-Err`).classList.add("remove");
  } else {
    document.querySelector(".name_day").style.color = "hsl(0, 1%, 44%)";
    document.querySelector(`.day-box .invalid-Err`).classList.add("remove");
    document.querySelector(`.day-box .em-Err`).classList.add("remove");
    inputed_day = day;
    all_inputs[0] = inputed_day;
    checkyear();
  }
}

// =====check year function
function checkyear() {
  if (year_input.value === "") {
    document.querySelector(".name_year").style.color = "hsl(0, 100%, 67%)";
    document.querySelector(`.year-box .invalid-Err`).classList.add("remove");
    document.querySelector(`.year-box .em-Err`).classList.remove("remove");
  } else if (
    isNaN(Number(year_input.value)) ||
    Number(year_input.value) < months.min_year ||
    Number(year_input.value) > months.currentYear
  ) {
    document.querySelector(".name_year").style.color = "hsl(0, 100%, 67%)";
    document.querySelector(`.year-box .invalid-Err`).classList.remove("remove");
    document.querySelector(`.year-box .em-Err`).classList.add("remove");
  } else {
    document.querySelector(".name_year").style.color = "hsl(0, 1%, 44%)";
    document.querySelector(`.year-box .invalid-Err`).classList.add("remove");
    document.querySelector(`.year-box .em-Err`).classList.add("remove");
    inputed_year = Number(year_input.value);
    all_inputs[2] = inputed_year;
    calcuAge();
  }
}

function calcuAge() {
  // activate btn color
  document.querySelector(".arrow").style.background = "hsl(259, 100%, 65%)";

  // assign year
  let inityear = 0;
  let new_year = parseInt(months.currentYear - all_inputs[2]);
  if (new_year === inityear) {
    target_year.textContent = inityear;
  } else {
    let yearconuter = setInterval(function () {
      inityear++;
      target_year.textContent = inityear;
      if (inityear === new_year) {
        clearInterval(yearconuter);
        inityear = 0;
      }
    }, 1);
  }

  // assign month
  let initmonth = 0;
  let new_month = Math.abs(months.currentmonth - all_inputs[1]);
  if (new_month === initmonth) {
    target_month.textContent = initmonth;
  } else {
    let monthconuter = setInterval(function () {
      initmonth++;
      target_month.textContent = initmonth;
      if (initmonth === new_month) {
        clearInterval(monthconuter);
        initmonth = 0;
      }
    }, 2);
  }

  // assign day
  let initday = 0;
  let converted_day = Number(day_input.value);
  let new_day = all_inputs[0] - converted_day;
  if (new_day === initday) {
    target_day.textContent = initday;
  } else {
    let dayconuter = setInterval(function () {
      initday++;
      target_day.textContent = initday;
      if (initday === new_day) {
        clearInterval(dayconuter);
        initday = 0;
      }
    }, 2);
  }
}
