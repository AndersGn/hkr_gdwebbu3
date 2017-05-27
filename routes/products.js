'use strict';
var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function (req, res) {
    res.render('products', { title: 'Våra Produkter' });
});

module.exports = router;
