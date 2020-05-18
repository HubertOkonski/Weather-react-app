import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import WeatherViewer from "./WeatherViewer";
import WeatherSearch from "./WeatherSearch";
import LocationSetter from "./LocationSetter";
function App() {
  document.title = "Weather App";
  const [city, setCity] = useState({
    name: "",
    temperature: null,
    humidity: 0,
    description: "",
    icon: "01d",
  });
  const [location, setLocation] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState(true);
  return (
    <div className="App-container">
      <LocationSetter
        setCity={setCity}
        city={city}
        location={location}
        setLocation={setLocation}
      />
      <div className="App">
        <div className="container">
          <WeatherViewer
            setCity={setCity}
            city={city}
            location={location}
            setLocation={setLocation}
            connectionStatus={connectionStatus}
            setConnectionStatus={setConnectionStatus}
          />
          <WeatherSearch setCity={setCity} />
        </div>
      </div>
    </div>
  );
}

export default App;
