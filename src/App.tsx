import React from "react";
import "./App.css";
import { SunsetData } from "./types";
import useSunsetData from "./useSunsetData";

function App() {
  const [data, isFetched, position] = useSunsetData();

  const renderData = (sunsetData: SunsetData) => {
    const { sunrise, sunset } = sunsetData;

    return (
      <>
        <p>
          <span role="img" aria-label="Sunrise">
            🌄
          </span>
          Sunrise: {sunrise.toLocaleTimeString()}{" "}
        </p>
        <p>
          <span role="img" aria-label="Sunset">
            🌇
          </span>
          Sunset: {sunset.toLocaleTimeString()}{" "}
        </p>
      </>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        {!position && <p>Allow browser use Your location.</p>}
        {isFetched && <p>fetching...</p>}
        {data && renderData(data)}
      </header>
    </div>
  );
}

export default App;
