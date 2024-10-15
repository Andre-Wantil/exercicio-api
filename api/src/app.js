const express = require("express");
const manipuladorDeErros = require("./middlewares/manipuladorDeErros");
const naoEncontrado = require("./middlewares/naoEncontrado");
const rotas = require("./routes/tarefasRoutes")

const app = express();

app.use(rotas)

app.use(manipuladorDeErros)

app.use(naoEncontrado);
app.use(manipuladorDeErros);

module.exports = app;