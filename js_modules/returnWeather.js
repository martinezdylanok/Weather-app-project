import DISPLAY_DATA from "./displayData.js";

function returnWeather(event) {
   event.preventDefault();
   const INPUT = document.getElementById("text");
   const SEARCH_BUTTON = document.querySelector("button");

   SEARCH_BUTTON.addEventListener("click", async () => {
      const KEY_WORD = INPUT.value;
      const RESPONSE = await fetch(`https://api.weatherapi.com/v1/current.json?key=35a83ae1482344c69fa83617230409&q=${KEY_WORD}`, { mode: "cors" });
      const DATA = await RESPONSE.json();
      DISPLAY_DATA(DATA);
   });
}

export default returnWeather;
