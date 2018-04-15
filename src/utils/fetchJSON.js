import fetch from './fetch.js'

export default (url, body, method='GET') => fetch(url, body, method).then(res => res.json())
