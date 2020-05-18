import {
  InputGroup,
  FormControl,
  Button,
  Form,
  FormGroup,
} from "react-bootstrap";
import React, { useState } from "react";
export default function WeatherSearch(props) {
  const [searchedCity, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleCLick = (e) => {
    e.preventDefault();
    SearchCity();
  };
  const SearchCity = () => {
    const apiID = "c91c266cec52dcfc2a3029ee89b0fde7";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${apiID}&lang=pl`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        changeData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const changeData = (weather) => {
    setSearch("");
    props.setCity({
      name: weather.name,
      temperature: (weather.main.temp - 273.15).toFixed(1),
      humidity: weather.main.humidity,
      description: weather.weather[0].description,
      icon: weather.weather[0].icon,
    });
  };
  return (
    <div className="search-panel">
      <Form>
        <FormGroup>
          <InputGroup className="mb-3 d-flex">
            <FormControl
              id="inputCity"
              placeholder="Wpisz miasto lub państwo"
              onChange={handleChange}
              type="text"
              value={searchedCity}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleCLick(e);
                }
              }}
            />
            <Button variant="success" onClick={(e) => handleCLick(e)}>
              Wyszukaj
            </Button>{" "}
          </InputGroup>
        </FormGroup>
      </Form>
    </div>
  );
}
