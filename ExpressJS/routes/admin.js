const path = require('path');

const express = require('express');

const router = express.Router();

//app.get only triggers for get responses
//app.post only triggers for post responses
//app.use triggers for all responses

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;