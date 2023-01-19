import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Baltimore",
    date: "Tuesday 3:00",
    temperature: 90,
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 70,
    wind: 20,
  };
  return (
    <div className="Weather">
      <h1 className="heading">Get your daily forecast</h1>
      <form className="mb-4">
        <div className="row">
          <div className="col-5">
            <input
              type="search"
              placeholder="Enter city name"
              className="form-control"
              autoComplete="off"
            />
            <img src="images/girl.webp" width="100" alt="" className="logo" />
          </div>
          <div className="col-3">
            <input type="submit" value="🔍" className="mag" />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1> {weatherData.city} </h1>
        <ul>
          <li> Last updated: {weatherData.date} </li>
          <li> {weatherData.description} </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">˚C </a> | <a href="/"> ˚F </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}
