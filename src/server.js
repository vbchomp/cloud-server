'use strict';

// 3rd Party Dependcies (modules)
const express = require('express');

// our own modules
const notFoundHandler = require('./handlers/404.js');
const errHandler = require('./handlers/500.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

// instantiate express
const app = express();


// Global Middleware
app.use(logger);
app.use(validator);
app.use(express.json()); // helps parse json

// our own route w /logger for all routes
app.get('/', logger, (req, res) => {
    res.status(200).send('Tadaa!');
});

// our own Routes w/ route validator middleware
app.get('/person', validator, (req, res) => {
    const person = {
        name: req.query.name,
    }
    res.status(200).json(person)
})

// Use external modules(order is important)
app.use('*', notFoundHandler);
app.use(errHandler);


// Exports here
module.exports = {
    app: app,
    start: port => {
        if (!port) { throw new Error('Missing Port'); }
        app.listen(port, () => console.log(`Listening on port ${port}`));
    },
};

// Create a GET route

// Create a GET route that uses Query Parameters

// Create a GET route that uses URL Parameters

// Create a POST route

// Error handling

// Throw a new error

// Using next() with errors

