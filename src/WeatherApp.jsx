import SearcBox from "./SearchBox";
import InfoBox from "./InfoBox";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.86,
        temp: 25.35,
        tempMin: 17.87,
        tempMax: 25.9,
        humidity: 46,
        weather: "haze",
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    // Weather tips based on conditions
    const getWeatherTips = () => {
        const temp = weatherInfo.temp;
        const humidity = weatherInfo.humidity;

        if (humidity > 80) {
            return {
                tip: "Don't forget your umbrella! ☔",
                icon: "🌧️",
                advice: "Rainy conditions expected. Stay dry!"
            };
        }
        if (temp < 0) {
            return {
                tip: "Bundle up! It's freezing! 🥶",
                icon: "❄️",
                advice: "Wear heavy winter clothing and stay warm."
            };
        }
        if (temp < 20) {
            return {
                tip: "It's quite cold outside 🧥",
                icon: "🌬️",
                advice: "A warm jacket is recommended."
            };
        }
        if (temp >= 20 && temp < 25) {
            return {
                tip: "Cool and pleasant weather 😊",
                icon: "🍃",
                advice: "Perfect for a light sweater."
            };
        }
        if (temp >= 25 && temp < 30) {
            return {
                tip: "Weather is just right! 🌤️",
                icon: "☁️",
                advice: "Enjoy the comfortable temperature."
            };
        }
        if (temp >= 30 && temp < 35) {
            return {
                tip: "Getting warm outside ☀️",
                icon: "🌡️",
                advice: "Stay hydrated and use sunscreen."
            };
        }
        return {
            tip: "It's very hot! Stay cool 🔥",
            icon: "🥵",
            advice: "Drink plenty of water and avoid direct sun."
        };
    };

    const weatherTips = getWeatherTips();

    return (
        <div className="weather-app">
            <div className="left-panel">
                <div className="header-row">
                    <h2>Weather App By Chandan</h2>
                    <ThemeToggle />
                </div>
                <SearcBox updateInfo={updateInfo} />

                {/* Weather Tips Section */}
                <div className="weather-tips">
                    <div className="tip-icon">{weatherTips.icon}</div>
                    <div className="tip-content">
                        <h4>{weatherTips.tip}</h4>
                        <p>{weatherTips.advice}</p>
                    </div>
                </div>

                {/* Quick Cities Section */}
                <div className="quick-cities">
                    <p className="quick-label">Popular Cities</p>
                    <div className="city-tags">
                        <span className="city-tag">🌆 Mumbai</span>
                        <span className="city-tag">🗽 New York</span>
                        <span className="city-tag">🗼 Paris</span>
                        <span className="city-tag">🏯 Tokyo</span>
                    </div>
                </div>
            </div>
            <div className="right-panel">
                <InfoBox info={weatherInfo} />
            </div>
        </div>
    );
}
