const express = require('express');

const mainRouter = express.Router();

mainRouter.get('/', (req, res, next) => {
    res.send('<h1>Hello from ExpressJS</h1>');
});

module.exports = mainRouter;