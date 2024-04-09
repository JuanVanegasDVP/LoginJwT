const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const authController = require('./controllers/authController');

// Usa el enrutador exportado por authController
app.use(authController);

module.exports = app;


