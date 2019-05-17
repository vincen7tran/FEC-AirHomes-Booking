const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Listing = require('../database/listing');
require('../database/db');

const app = express();

const distDir = path.join(__dirname, '/../public');

app.use(express.static(distDir));

app.use(bodyParser.json());

app.get('/listing', async (req, res) => {
  const { listingId } = req.query;

  try {
    const listing = await Listing.find({ listingId });
    res.send(listing);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = app;
