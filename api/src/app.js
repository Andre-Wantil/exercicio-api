const express = require("express");
const manipuladorDeErros = require("./middlewares/manipuladorDeErros");

const app = express();

app.use(manipuladorDeErros)

module.exports = app;