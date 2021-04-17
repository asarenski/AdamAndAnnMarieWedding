function requireHTTPS(req, res, next) {
    if (
        !req.secure
        && req.get('x-forwarded-proto').toLowerCase() !== 'https'
        && process.env.NODE_ENV !== 'development'
    ) {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

module.exports = requireHTTPS;