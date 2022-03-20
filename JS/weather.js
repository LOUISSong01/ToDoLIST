const API_KEY = "e44018a2679d543a615a29f87e68ddec";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  const weatherIcon = document.querySelector("#weather-icon");
  const weather = document.querySelector("#weather span:nth-child(2)");

  function fontcolorSetter() {
    if (randomground === "0.jpg") {
      weather.classList.add("blackWeather");
    }
  }

  fontcolorSetter();

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:last-child");
      const foricon = data.weather[0].icon;
      const weatherIconAdrs = ` http://openweathermap.org/img/wn/${foricon}@2x.png`;

      city.innerText = data.name;

      /*function weathericon(){
              if(foricon == "Clouds"){
                  return "\u2601";
              }else if(foricon == "Rain"){
                  return "\u1F327";
              }
          }*/

      weather.innerText = `${Math.round(data.main.temp)} °C`;
      weatherIcon.setAttribute("src", weatherIconAdrs);
    });
}
function onGeoError() {
  alert("Can't find you! Error!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
