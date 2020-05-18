import React, { useEffect } from "react";
function WeatherViewer(props) {
  useEffect(() => {
    if (!navigator.geolocation && !props.location) {
    } else if (navigator.geolocation && props.location) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  });
  function getCityByCords(x, y) {
    const apiID = "c91c266cec52dcfc2a3029ee89b0fde7";
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&appid=${apiID}&lang=pl`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        showWeather(data);
      })
      .catch((error) => {
        props.setConnectionStatus(false);
      });
  }
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getCityByCords(latitude, longitude);
  }

  function showWeather(weather) {
    props.setLocation(false);
    props.setCity({
      name: weather.name,
      temperature: (weather.main.temp - 273.15).toFixed(1),
      humidity: weather.main.humidity,
      description: weather.weather[0].description,
      icon: weather.weather[0].icon,
    });
  }
  function error() {}
  return (
    <div>
      <h1>
        <img
          className="icon"
          src={require(`../icons/${props.city.icon}.svg`)}
          alt="Weather icon not loaded"
        />
      </h1>
      <h1>{props.icon}</h1>
      <h1>{props.city.name}</h1>
      <h2 className="weather-description">{props.city.description}</h2>
      <h3 className="weather-humidity-temperature">
        <span className=" ">
          <img
            className="sm-icon"
            src={require(`../icons/humidity.svg`)}
            alt=""
          />
          {props.city.humidity}%
        </span>

        <span className="info-container">
          {props.city.temperature > 15 ? (
            <img
              className="sm-icon"
              src={require(`../icons/warm.svg`)}
              alt=""
            />
          ) : (
            <img
              className="sm-icon"
              src={require(`../icons/cold.svg`)}
              alt=""
            />
          )}
          {props.city.temperature + "°C"}
        </span>
      </h3>
    </div>
  );
}

export default WeatherViewer;
