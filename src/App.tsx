import React, { useState, useEffect } from "react";
import "./App.css";
import { getSusetData } from "./api";
import { SunsetData } from "./types";

function App() {
  const [data, setData] = useState<SunsetData>();
  const [isFetched, setFetched] = useState(false);
  const [position, setPosition] = useState<Position>();

  async function fetchSunTime(currentLocation: Position) {
    try {
      setFetched(true);

      const sunsetData = await getSusetData(currentLocation);

      setData(sunsetData);
    } finally {
      setFetched(false);
    }
  }

  useEffect(() => {
    const geo = navigator.geolocation;

    geo.getCurrentPosition((currentLocation) => {
      setPosition(currentLocation);
    });
  }, []);

  useEffect(() => {
    if (!position) {
      return;
    }
    fetchSunTime(position);
  }, [position]);

  const renderData = (sunsetData: SunsetData) => {
    const { sunrise, sunset } = sunsetData;

    return (
      <>
        <p>🌄Sunrise: {sunrise.toLocaleTimeString()} </p>
        <p>🌇Sunset: {sunset.toLocaleTimeString()} </p>
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
