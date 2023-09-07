const DISPLAY_DATA = (DATA) => {
   const CITY = document.querySelector(".city");
   const CELCIUS = document.querySelector(".celcius");
   const FEELS_LIKE = document.querySelector(".feels-like");
   const HUMIDTY = document.querySelector(".humidity");
   const WIND = document.querySelector(".wind");
   const WEATHER_CARD = document.querySelector(".weather-card");

   WEATHER_CARD.classList.add("active");
   CITY.innerHTML = DATA.location.name;
   CELCIUS.innerHTML = `${DATA.current.temp_c}  °C`;
   FEELS_LIKE.innerHTML = `Feels like: ${DATA.current.feelslike_c} °C`;
   HUMIDTY.innerHTML = `Humidity: ${DATA.current.humidity} %`;
   WIND.innerHTML = `Wind: ${DATA.current.wind_kph} km/h`;
};

export default DISPLAY_DATA;
