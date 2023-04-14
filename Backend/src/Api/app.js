const express = require('express');
const cors = require('cors');
const bpCrawlerRoute = require('../Routes/bpCrawlerRoute')

const app = express();
app.use(express.json());
app.use(cors());
app.use('/crawl', bpCrawlerRoute);

module.exports = app;
