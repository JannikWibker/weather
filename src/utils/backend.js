import fetchJSON from './fetchJSON.js'
import transform from './transform.js'

const backend = {
  city: (city_name) => fetchJSON(`${window.BACKEND}/city?city=${city_name}`)
    .then(x => x[0]),
  weather: (city_code, unit='C') => fetchJSON(`${window.BACKEND}/weather?code=${city_code}&unit=${unit}`) // unit is not being used by the backend as of now
    .then(x => transform(x, unit))
}

export default backend
