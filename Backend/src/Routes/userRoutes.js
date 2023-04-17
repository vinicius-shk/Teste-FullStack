const express = require('express');
const userController = require('../Controller/UserController');

const userControllerRoute = express.Router();

userControllerRoute.post(
  '/',
  (req, res, next) => new userController(req, res, next).postQuery(),
  );

module.exports = userControllerRoute;