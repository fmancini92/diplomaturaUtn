import express from 'express'
/* var express = require('express'); */
var loginRouter = express.Router();

/* GET home page. */
loginRouter.get('/', function(req, res, next) {
  res.render('admin/login',{
    layout: 'admin/layout'
  });
});

export default loginRouter;
