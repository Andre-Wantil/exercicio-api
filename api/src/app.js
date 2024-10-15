const express = require("express");
const manipuladorDeErros = require("./middlewares/manipuladorDeErros");
const naoEncontrado = require("./middlewares/naoEncontrado");
const rotas = require("./routes/tarefasRoutes");
const cors = require("cors");

const app = express();

app.use(cors())
app.use(express.json())

app.use(rotas)

app.use(manipuladorDeErros)

app.use(naoEncontrado);
app.use(manipuladorDeErros);

module.exports = app;