let express = require('express');
let server = express();

server.get('/.well-known/apple-app-site-association', function(request, response) {
  response.sendFile(__dirname +  '/.well-known/apple-app-site-association');
});


const PORT = 80

server.listen(PORT, () => {
  console.info(`Listening at http://localhost:${PORT}/`);
});