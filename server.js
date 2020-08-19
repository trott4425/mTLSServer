const fs = require('fs');
const https = require('https');

https
  .createServer(
    {
      // ...
      requestCert: true,
      rejectUnauthorized: false,
      ca: fs.readFileSync('ca.crt'),
      cert: fs.readFileSync('server.crt'),
      key: fs.readFileSync('server.key')
      // ...
    },
    (req, res) => {
        if (!req.client.authorized) {
          res.writeHead(401);
          return res.end('Invalid client certificate authentication.');
        }
  
        res.writeHead(200);
        res.end('Hello, world!');
      }
  )
  .listen(9443);