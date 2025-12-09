import Button from '@mui/material/Button';
import FloatingInput from './FloatingInput';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearcBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      }

      console.log(result);
      return result;

    } catch (err) {
      throw err;
    }
  }


  let handleChange = (evt) => {
    setCity(evt.target.value);
    if (error) setError(false);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setLoading(true);
      setError(false);
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    }
    catch (err) {
      setError(true);
    }
    finally {
      setLoading(false);
    }
  };


  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit} className="search-form">
        <FloatingInput
          id="city"
          value={city}
          onChange={handleChange}
          label="Enter City Name"
        />
        <Button
          variant="contained"
          type='submit'
          disabled={loading || !city.trim()}
        >
          {loading && <span className="loading-spinner"></span>}
          {loading ? 'Searching...' : '🔍 Search Weather'}
        </Button>
        {error && (
          <p className="error-message">
            ⚠️ No such place found. Please try another city.
          </p>
        )}
      </form>
    </div>
  );
}