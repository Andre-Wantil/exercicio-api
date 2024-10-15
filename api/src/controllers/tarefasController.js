const errorNotFound = require("../utils/erroNotFound");
const tarefasService = require("../services/tarefasService");
const Tarefa = require("../models/Tarefa");

class TarefasController {
    index(req, res, next) {
        try {
            const descricao = req.params.descricao;
            const tarefas = tarefasService.encontrarPelaDescricao(descricao);

            if (tarefas.length > 0) {
                res.status(200).json(tarefas);
            } else {
                errorNotFound(res, "Tarefas não encontradas");
            }
        } catch (erro) {
            next(erro);
        }
    }

    show(req, res, next) {
        try {
            const dataFiltro = req.params.data;
            
            if (!dataFiltro) {
                throw new Error("A data não foi informada");
            }

            const data = tarefasService.buscarPelaData(dataFiltro);

            if (data) {
                res.status(200).json(data);
            } else {
                errorNotFound(res, "Data não encontrada");
            }
        } catch (erro) {
            next(erro);
        }
    }

    store(req, res, next) {
        try {
            const { descricao } = req.body;

            if (!descricao) {
                return next(
                    new Error(
                        "A descrição da tarefa é obrigatória."
                    )
                )
            }

            const novaTarefa = new Tarefa(descricao);

            tarefasService.adicionar(novaTarefa);
            return res.status(201).json(novaTarefa);
        } catch (erro) {
            next(erro);
        }
    }

    update(req, res, next) {
        try {
            const id = parseInt(req.params.id);

            const tarefa = tarefasService.buscarPeloId(id);
            if (!tarefa) {
                errorNotFound(res, "Tarefa não encontrada");
            }

            tarefasService.atualizar(id, req.body);
            return res
            .status(200)
            .json({ mensagem: "Tarefa atualizada com sucesso!", tarefa });
        } catch (erro) {
            next(erro);
        }
    }
}

module.exports = new TarefasController();