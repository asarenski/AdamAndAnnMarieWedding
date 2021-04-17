const result = require('dotenv').config();

if (result.error) {
    throw new Error(result.error);
}

const {ENV: CONFIG_ENV} = result.parsed;
const ENV = process.env.NODE_ENV || CONFIG_ENV || 'production';

function requireHTTPS(req, res, next) {
    if (
        !req.secure
        && (req.get('X-Forwarded-Proto') || '').toLowerCase() !== 'https'
        && ENV !== 'development'
    ) {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

module.exports = requireHTTPS;