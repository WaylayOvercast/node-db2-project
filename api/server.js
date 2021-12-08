const express = require("express")
const router = require('./cars/cars-router')
const server = express()

server.use(express.json());
server.use('/api/cars', router);
// DO YOUR MAGIC

server.get('/', (req, res) => {
    res.send(`<h1> Hello undef person! welcome to my api </h1>   <br>
    <a href =https://www.youtube.com/watch?v=7VkqerXVtTA> please enjoy my code with this</a> `);
  });

module.exports = server
