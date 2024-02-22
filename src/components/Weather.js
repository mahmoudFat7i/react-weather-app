import React from "react";
import "./Weather.css";

const Weather = (props) => {
  return (
    <div className="w-full">
      {props.weatherData.weather ? (
        <div className="weather-container">
          <div className="weather-details">
            <div className="weather-info-left">
              <p>
                {props.weatherData.name},{props.weatherData.sys.country}
              </p>
              <p>{props.weatherData.weather[0].description}</p>
              <h1>{props.weatherData.main.temp.toFixed()} °c</h1>
            </div>
            <div className="weather-info-right">
              <div className="relative">
                <img
                  src={`http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`}
                  alt=""
                />
              </div>
              {props.weatherData.name !== undefined ? (
                <div className="weather-details-info">
                  <div>
                    <p>Feels Like</p>
                    <p>{props.weatherData.main.feels_like.toFixed()} °c</p>
                  </div>
                  <div>
                    <p>Humidity</p>
                    <p>{props.weatherData.main.humidity} %</p>
                  </div>
                  <div>
                    <p>Wind speed</p>
                    <p>{props.weatherData.wind.speed.toFixed()} km/h</p>
                  </div>
                  <div>
                    <p>Pressure</p>
                    <p>{props.weatherData.main.pressure} hPa</p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
