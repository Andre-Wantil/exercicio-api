const errorNotFound = require("../utils/erroNotFound");
const tarefasService = require("../services/tarefasService");

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
}

module.exports = new TarefasController();