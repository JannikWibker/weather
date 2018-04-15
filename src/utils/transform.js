const unit_transform = (value, unit) =>
  unit === 'K'
  ? value
  : unit === 'C'
    ? value -273.15
    : unit === 'F'
      ? value * (9/5) - 459.67
      : undefined

export default (obj, unit='K') => ({
  location: {
    lat: obj.coord.lat,
    lon: obj.coord.lon,
    city_name: obj.name,
    city_code: '' + obj.id,
    country: obj.sys.country,
    sunrise: obj.sys.sunrise,
    sunset: obj.sys.sunset,
  },
  sun: {
    sunrise: obj.sys.sunrise,
    sunset: obj.sys.sunset,
    isDaytime: ((date=(new Date()).valueOf()) =>
      date > obj.sys.sunrise && obj.sys.sunset > date
    )(1485743411)
  },
  wind: obj.wind,
  clouds: obj.clouds ? obj.clouds.all : null,
  rain: obj.rain ? Math.min(Math.sqrt(obj.rain['3h'] / 3) * 14, 100) : null, // rain per 3h -> rain per 1h -> sqrt because having values closer together (for wide range of inputs) is better for something as visual as opacity -> *14 because out of 100 -> Math.min(x, 100) because max value of 100 (%)
  snow: obj.snow ? Math.min(Math.sqrt(obj.snow['3h'] / 3) * 14, 100) : null, // snow per 3h -> rain per 1h -> maximum of 100 because of percentage
  description: obj.weather[0].description,
  temp: {
    current: Math.round(unit_transform(obj.main.temp, unit) * 100) / 100,
    min: Math.round(unit_transform(obj.main.temp_min, unit) * 100) / 100,
    max: Math.round(unit_transform(obj.main.temp_max, unit) * 100) / 100
  },
  pressure: obj.main.pressure,
  humidity: obj.main.humidity,
})
