const tarefasRepository = require("../repositories/tarefasRepository");


class TarefasService {
    encontrarTodas() {
        return tarefasRepository.encontrarTodas();
    }

    encontrarPelaDescricao(descricao) {
        const tarefas = tarefasRepository.encontrarTodas();
        return this.filtrarPorDescricao(tarefas, descricao);
    }

    filtrarPorDescricao(tarefas, filtros) {
        return tarefas.filter((tarefa) => {
            const descricaoValida = filtros
            ? tarefa.descricao.toLowerCase().includes(filtros.toLowerCase())
            : true;
            return descricaoValida;
        })
    }

    buscarPeloId(id) {
        return tarefasRepository.buscarPeloId(id);
    }

    buscarPelaData(data) {
        return tarefasRepository.encontrarPelaData(data)
    }

    adicionar(tarefa) {
        return tarefasRepository.adicionar(tarefa);
    }

    atualizar(id, descricaoAtualizada) {
        return tarefasRepository.atualizar(id, descricaoAtualizada);
    }

    excluir(id) {
        return tarefasRepository.excluir(id);
    }
}

module.exports = new TarefasService();