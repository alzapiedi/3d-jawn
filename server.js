var express = require('express');

var server = express();

server.use('/build', express.static('build'));
server.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, console.log.bind(null, 'ayyy'));
