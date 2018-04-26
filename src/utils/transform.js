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
    sunrise: obj.sys.sunrise*1000,
    sunset: obj.sys.sunset*1000,
    isDaytime: ((date=(new Date()).valueOf()) =>
      date > obj.sys.sunrise*1000 && obj.sys.sunset*1000 > date
    )()
  },
  wind: obj.wind,
  clouds: obj.clouds ? obj.clouds.all : null,
  rain: obj.rain ? Math.min(Math.sqrt(obj.rain['3h'] / 3) * 14, 100) : null, // rain per 3h -> rain per 1h -> sqrt because having values closer together (for wide range of inputs) is better for something as visual as opacity -> *14 because out of 100 -> Math.min(x, 100) because max value of 100 (%)
  snow: obj.snow ? Math.min(Math.sqrt(obj.snow['3h'] / 3) * 14, 100) : null, // snow per 3h -> rain per 1h -> maximum of 100 because of percentage
  description: obj.weather[0].description,
  temp: {
    current: Math.round(unit_transform(obj.main.temp, unit) * 10) / 10,
    min: Math.round(unit_transform(obj.main.temp_min, unit) * 10) / 10,
    max: Math.round(unit_transform(obj.main.temp_max, unit) * 10) / 10
  },
  pressure: obj.main.pressure,
  humidity: obj.main.humidity,
})
