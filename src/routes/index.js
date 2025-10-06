const { Router } = require("express");
const router = Router();

// Exemplo de rota inicial
router.get("/", (req, res) => {
  res.send("API de Portaria funcionando!");
});

module.exports = router;
