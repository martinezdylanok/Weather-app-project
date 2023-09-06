const DISPLAY_DATA = (DATA) => {
   const CITY = document.querySelector(".city");
   const CELCIUS = document.querySelector(".celcius");
   const FEELS_LIKE = document.querySelector(".feels-like");
   const HUMIDTY = document.querySelector(".humidity");
   const WIND = document.querySelector(".wind");

   CITY.innerText = DATA.location.name;
   CELCIUS.innerText = DATA.current.temp_c;
   FEELS_LIKE.innerText = DATA.current.feelslike_c;
   HUMIDTY.innerText = DATA.current.humidity;
   WIND.innerText = DATA.current.wind_kph;
};

export default DISPLAY_DATA;
