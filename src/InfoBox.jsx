import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import OpacityIcon from '@mui/icons-material/Opacity';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CloudIcon from '@mui/icons-material/Cloud';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';


export default function InfoBox({ info }) {
  // Weather images for different conditions
  const Hot_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60";
  const SlightlyHot_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=600&auto=format&fit=crop&q=60";
  const Normal_URL = "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=600&auto=format&fit=crop&q=60";
  const Cold_URL = "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=600&auto=format&fit=crop&q=60";
  const ExtremeCold_URL = "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=600&auto=format&fit=crop&q=60";
  const Rain_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&auto=format&fit=crop&q=60";

  // Temperature-based weather classification
  const getWeatherType = () => {
    const temp = info.temp;

    // Check for rain first (humidity based)
    if (info.humidity > 80) return 'rain';

    // Temperature-based conditions
    if (temp < 0) return 'extremely-cold';
    if (temp >= 0 && temp < 20) return 'extreme-cold';
    if (temp >= 20 && temp < 25) return 'cold';
    if (temp >= 25 && temp < 30) return 'normal';
    if (temp >= 30 && temp < 35) return 'slightly-hot';
    return 'hot'; // 35 and above
  };

  const weatherType = getWeatherType();

  const getWeatherIcon = () => {
    switch (weatherType) {
      case 'rain':
        return <ThunderstormIcon className="weather-icon rain" sx={{ fontSize: 36 }} />;
      case 'extremely-cold':
        return <AcUnitIcon className="weather-icon extremely-cold" sx={{ fontSize: 36 }} />;
      case 'extreme-cold':
        return <SevereColdIcon className="weather-icon extreme-cold" sx={{ fontSize: 36 }} />;
      case 'cold':
        return <AcUnitIcon className="weather-icon cold" sx={{ fontSize: 36 }} />;
      case 'normal':
        return <CloudIcon className="weather-icon normal" sx={{ fontSize: 36 }} />;
      case 'slightly-hot':
        return <WbSunnyIcon className="weather-icon slightly-hot" sx={{ fontSize: 36 }} />;
      case 'hot':
        return <LocalFireDepartmentIcon className="weather-icon hot" sx={{ fontSize: 36 }} />;
      default:
        return <ThermostatIcon className="weather-icon" sx={{ fontSize: 36 }} />;
    }
  };

  const getImageUrl = () => {
    switch (weatherType) {
      case 'rain': return Rain_URL;
      case 'extremely-cold':
      case 'extreme-cold': return ExtremeCold_URL;
      case 'cold': return Cold_URL;
      case 'normal': return Normal_URL;
      case 'slightly-hot': return SlightlyHot_URL;
      case 'hot': return Hot_URL;
      default: return Normal_URL;
    }
  };

  const getWeatherLabel = () => {
    switch (weatherType) {
      case 'rain': return '🌧️ Rainy';
      case 'extremely-cold': return '🥶 Extremely Cold';
      case 'extreme-cold': return '❄️ Extreme Cold';
      case 'cold': return '🌬️ Cold';
      case 'normal': return '☁️ Normal';
      case 'slightly-hot': return '☀️ Slightly Hot';
      case 'hot': return '🔥 Very Hot';
      default: return info.weather;
    }
  };

  return (
    <div className="InfoBox">
      <div className='cardContainer'>
        <Card className={`weather-card ${weatherType}`}>
          <div className="card-media-wrapper">
            <CardMedia
              sx={{ height: 200 }}
              image={getImageUrl()}
              title="weather image"
            />
            <div className="weather-badge">
              {getWeatherLabel()}
            </div>
          </div>
          <CardContent>
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
              {/* City name with weather icon */}
              <Box display="flex" alignItems="center" justifyContent="center" gap={1} mb={0.5}>
                {getWeatherIcon()}
                <Typography variant="h5" component="div">
                  {info.city}
                </Typography>
              </Box>

              {/* Large temperature display */}
              <div className={`temperature-display ${weatherType}`}>
                {Math.round(info.temp)}°C
              </div>

              {/* Weather description */}
              <p className="weather-description">
                Feels like {Math.round(info.feelslike)}°C • {info.weather}
              </p>

              {/* Stats grid */}
              <div className="stats-grid">
                <div className="stat-box min-temp">
                  <AcUnitIcon className="stat-icon" fontSize="small" />
                  <div className="stat-label">Min</div>
                  <div className="stat-value">{Math.round(info.tempMin)}°</div>
                </div>
                <div className="stat-box max-temp">
                  <WhatshotIcon className="stat-icon" fontSize="small" />
                  <div className="stat-label">Max</div>
                  <div className="stat-value">{Math.round(info.tempMax)}°</div>
                </div>
                <div className="stat-box humidity">
                  <OpacityIcon className="stat-icon" fontSize="small" />
                  <div className="stat-label">Humidity</div>
                  <div className="stat-value">{info.humidity}%</div>
                </div>
              </div>
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}