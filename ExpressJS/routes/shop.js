const path = require('path');

const express = require('express');

const mainRouter = express.Router();

mainRouter.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
});

module.exports = mainRouter;