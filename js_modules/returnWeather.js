async function returnWeather() {
   const RESPONSE = await fetch("https://api.weatherapi.com/v1/current.json?key=35a83ae1482344c69fa83617230409&q=copenhagen", { mode: "cors" });
   const DATA = await RESPONSE.json();
   console.log(DATA);
}

export default returnWeather;
