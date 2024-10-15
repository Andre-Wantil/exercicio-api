const express = require("express");
const tarefasController = require("../controllers/tarefasController");


const router = express.Router();

router.get("/", (req, res) => {
    const dataBruta = new Date();

    res.status(200).json({ data: dataBruta })
})
router.get("/tarefas", tarefasController.index);
router.get("/tarefas/:descricao", tarefasController.index);
router.get("/tarefas/data/:data", tarefasController.show);
router.post("/tarefas", tarefasController.store);
router.put("/tarefas/:id", tarefasController.update);
router.put("/tarefas/:id/finalizar", tarefasController.finalizar);
router.delete("/tarefas/:id", tarefasController.delete);


module.exports = router;