export default (url, body, method='GET') =>
  window.fetch(new Request(url, {
    method: method.toUpperCase(),
    mode: 'cors',
    body: body ? JSON.stringify(body) : null,
    headers: new Headers({
      'Content-Type': body ? 'application/json' : 'text/plain'
    })
  }))
  .then(res => {
    if(res.ok) return res
    else throw Error(res.statusText)
  })
  .catch(err => console.log(err))
