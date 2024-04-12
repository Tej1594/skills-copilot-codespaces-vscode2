// Create web server

// Import modules

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Handle request

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Read data from file

const readData = () => {
    const data = fs.readFileSync('data.json');
    return JSON.parse(data);
}

