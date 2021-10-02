const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

//app.get only triggers for get responses
//app.post only triggers for post responses
//app.use triggers for all responses

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;