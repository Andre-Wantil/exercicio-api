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


module.exports = router;