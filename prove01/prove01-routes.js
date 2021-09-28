const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Prove01</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Add User</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Prove01</title></head>');
        res.write('<body><ul><li>User One</li><li>User Two</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
    //Some error code.
};

exports.handler = requestHandler;