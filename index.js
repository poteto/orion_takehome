const express = require('express');
const winston = require('winston');

const app = express();
const DATES = require('./data/dates.json');
const TITLES = require('./data/titles.json');
const THUMBNAILS = require('./data/thumbnails.json');

app.set('port', (process.env.PORT || 5000));

app.get('/dates', (req, res) => {
  let auth = req.get('Authorization');
  if (auth !== process.env.DATES_SECRET) {
    return res.sendStatus(403);
  }
  res.set('Content-Type', 'application/json');
  return res.status(200).send(DATES);
});

app.get('/titles', (req, res) => {
  let auth = req.get('Authorization');
  if (auth !== process.env.TITLES_SECRET) {
    return res.sendStatus(403);
  }
  res.set('Content-Type', 'application/json');
  return res.status(200).send(TITLES);
});

app.get('/thumbnails', (req, res) => {
  let auth = req.get('Authorization');
  if (auth !== process.env.THUMBNAILS_SECRET) {
    return res.sendStatus(403);
  }
  res.set('Content-Type', 'application/json');
  return res.status(200).send(THUMBNAILS);
});

app.listen(app.get('port'), () => {
  winston.info('Node app is running on port', app.get('port'));
});

module.exports = app;