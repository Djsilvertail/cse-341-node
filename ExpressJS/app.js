//const http = require('http'); Not needed when using app.listen()

const express =require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Add Product Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express</h1>');
});

//const server = http.createServer(app);
//server.listen(3000);
app.listen(3000);// This works the same as the previous two lines.