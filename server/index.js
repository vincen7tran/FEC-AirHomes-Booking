const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('../database/db');

const app = express();
const port = process.env.PORT || 3000;

const distDir = path.join(__dirname, '/../public');

app.use(express.static(distDir));

app.use(bodyParser.json());

app.listen(port, () => console.log('Listening on Port:', port));
