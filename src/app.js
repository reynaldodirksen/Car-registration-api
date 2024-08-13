const http = require('http');
const express = require('express');
const carRoutes = require('./routes');
const Parser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(Parser.json());
app.use('/api/cars', carRoutes);

const server = http.createServer(app);
const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
