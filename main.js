import returnWeather from "./js_modules/returnWeather.js";

const FORM = document.querySelector("form");
FORM.addEventListener("submit", returnWeather);
