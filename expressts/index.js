const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'static')));

const server = http.createServer(app);
server.listen(3001);