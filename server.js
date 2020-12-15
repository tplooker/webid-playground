const express = require('express')
const app = express()
const port = 3000

// TODO replace the URL below
const idp_url = 'https://c917d35e879b.ngrok.io';

app.get('/.well-known/webid', (req, res) => {
  console.log("well known hit");
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ idp_endpoint: idp_url + '/webid/signin' }));
})

app.get('/webid/signin', (req, res) => {
  console.log("signin hit")
  res.send({ 'signin_url': idp_url + '/webid/todo' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})