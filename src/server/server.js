const path = require('path');
const express = require('express');

const app = express();
const requireHTTPS = require('./requireHTTPS');
const routes = require('./routes');

const {SERVER_PORT, CORS} = process.env;
const PORT = SERVER_PORT || 8080;

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