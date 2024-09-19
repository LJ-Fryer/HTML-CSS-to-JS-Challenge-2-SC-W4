function replaceSearchCity(event) {
  event.preventDefault();
  let userInput = document.querySelector("#input-city");
  let newCity = document.querySelector("#new-city");
  newCity.innerHTML = `${userInput.value}`;

  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let fullDayTime = `${day} ${hours}:${minutes}`;
  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = `${fullDayTime}`;
}
let userCity = document.querySelector("#user-city");
userCity.addEventListener("submit", replaceSearchCity);
