'use strict'

module.exports = (error, req, res, next) => {
    res.status(500).send({
        route: res.path,
        // query: req.query,
        // body: req.body,
        message: error,
        error: `SERVER ERROR ${error.message}`

    })
    next();
}