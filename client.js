const fs = require('fs');
const https = require('https');
const axios = require('axios');

// ...
const httpsAgent = new https.Agent({
  cert: fs.readFileSync('client.crt'),
  key: fs.readFileSync('client.key'),
  ca: fs.readFileSync('ca.crt'),
});

const start = async function (){
    const result = await axios.get('https://myserver.internal.net:9443', { httpsAgent });
    console.log(result.data);
}

start();
// do something with the result

// ...