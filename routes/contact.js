'use strict';
var express = require('express');
var router = express.Router();

/* GET contacts. */
router.get('/', function (req, res) {
    res.render('contact', { title: 'Kontakt' });
});

module.exports = router;
