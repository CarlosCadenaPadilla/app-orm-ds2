'use strict';
const express = require('express');

var router = express.Router();
const Contact = require('../models/contact');
const app = express();
app.get('/contact', (req, res) => {

        if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                cuentas
            });


});
