var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function (req, res, next) {
  const data = {

  };
  const vueOptions = {
    head: {
      title: ''
    }
  };

  res.renderVue('./views/index.vue', data, vueOptions);
});

module.exports = router;
