const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const requireHTTPS = require('./requireHTTPS');
const routes = require('./routes');

app.use(express.static(path.join(__dirname,'../../build')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://adamannmariewedding.ue.r.appspot.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(requireHTTPS);

app.get('/api/checkHealth', routes.checkHealth);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}`));