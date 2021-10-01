const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const mainRouter = express.Router();

mainRouter.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = mainRouter;