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

    excluir(id) {
        const indiceDaTarefa = tarefas.findIndex((t) => t.id === id);

        return tarefas.splice(indiceDaTarefa, 1);
    }
}

module.exports = new TarefasRepository();