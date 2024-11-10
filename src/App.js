import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <Weather />

        <footer>
          This project was coded by Charlie G and is hosted on{" "}
          <a
            href="https://github.com/charliegood2046/week5-react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and open-sourced.
        </footer>
      </div>
    </div>
  );
}
