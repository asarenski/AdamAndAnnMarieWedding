const path = require('path');
const express = require('express');

const app = express();
const requireHTTPS = require('./requireHTTPS');
const routes = require('./routes');
const result = require('dotenv').config();

if (result.error) {
    throw new Error(result.error);
}

const {CORS, PORT: CONFIG_PORT} = result.parsed;
const PORT = process.env.PORT || CONFIG_PORT || 8080;

app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', 'https://adamannmariewedding.ue.r.appspot.com');
    res.header('Access-Control-Allow-Origin', CORS);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(requireHTTPS);

/**
 * Must come after other global middleware
 */
app.use(express.static(path.join(__dirname,'../../build')));

app.get('/api/checkHealth', routes.checkHealth);
app.get('/api/proposalPhotos', routes.getProposalPhotos);
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));