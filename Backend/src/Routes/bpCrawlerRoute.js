const express = require('express');
const BpController = require('../Controller/BpController');

const bpCrawlerRoute = express.Router();

bpCrawlerRoute.get(
  '/',
  (req, res, next) => new BpController(req, res, next).crawl(),
  );

module.exports = bpCrawlerRoute;