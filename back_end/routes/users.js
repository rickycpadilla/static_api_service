var express = require('express');
var router = express.Router();
var data = require("../lib/res");
var func = require("../lib/getActive");

function byId(param, id){
  for (var i = 0; i < param.length; i++) {
    if (param[i].user_data.id == id){
      return param[i]
    }
  }
}

router.get('/users', function(req, res, next) {
  res.json({data: data});
});

router.get('/active_users', function(req, res, next) {
  res.json({data: func(data)})
});

router.get('/users/:id', function(req, res, next) {
  res.json({data: byId(data, req.params.id)});
});

module.exports = router;
