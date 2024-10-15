const { tarefas } = require("../mock/listaTarefas.json")

class TarefasRepository {
    encontrarTodas() {
        return tarefas;
    }

    buscarPeloId(id) {
        return tarefas.find((t) => t.id === id);
    }

    encontrarPelaData(data) {
        return tarefas.filter((d) => d.criadaEm.includes(data))
    }

    adicionar(tarefa) {
        tarefas.push(tarefa);
        return tarefa;
    }

    atualizar(id, descricaoAtualizada) {
        const tarefa = this.buscarPeloId(id);
        Object.assign(tarefa, descricaoAtualizada);
    }
}

module.exports = new TarefasRepository();