"use strict";
function showWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?id=703448&appid=b008b611bf4075eb12ea48ff1a84b599"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      updateWeather(data);
      console.log(data);
    });
}

showWeather();

function updateWeather(data) {
  const items = document.querySelectorAll(".nav-item");
  items.forEach((el, index) => {
    el.querySelector(`.days`).textContent = data.list[index * 8]["dt_txt"];
    el.querySelector(`.temp_min`).innerHTML =
      Math.round(data.list[index * 8].main.temp_min - 273) + "&deg;";
    el.querySelector(`.temp_max`).innerHTML =
      Math.round(data.list[index * 8].main.temp_max - 273) + "&deg;";
    el.querySelector(`.sky`).textContent =
      data.list[index * 8].weather[0]["description"];
    el.querySelector(
      `.icon`
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${
      data.list[index * 8].weather[0]["icon"]
    }@2x.png">`;
  });
}

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  showWeather();
  console.log("hello");
});
