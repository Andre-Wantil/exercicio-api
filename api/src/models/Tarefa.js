const gerarIdUnico = require("../utils/gerarIdUnico");
const { tarefas } = require("../mock/listaTarefas.json")

class Tarefa {
    constructor(descricao) {
        this.id = gerarIdUnico(tarefas);
        this.descricao = descricao;
        this.finalizado = false;
        this.criadaEm = new Date();
    }
}

module.exports = Tarefa;