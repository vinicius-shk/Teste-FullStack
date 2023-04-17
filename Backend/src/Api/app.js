const express = require('express');
const cors = require('cors');
const bpCrawlerRoute = require('../Routes/bpCrawlerRoute');
const userRoutes = require('../Routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/crawl', bpCrawlerRoute);
app.use('/user', userRoutes);

module.exports = app;
