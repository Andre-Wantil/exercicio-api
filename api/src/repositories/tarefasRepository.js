const { tarefas } = require("../mock/listaTarefas.json")

class TarefasRepository {
    encontrarTodas() {
        return tarefas;
    }

    encontrarPelaData(data) {
        return tarefas.filter((d) => d.criadaEm.includes(data))
    }

    adicionar(tarefa) {
        tarefas.push(tarefa);
        return tarefa;
    }
}

module.exports = new TarefasRepository();