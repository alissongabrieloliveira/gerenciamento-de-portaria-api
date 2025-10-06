const { Router } = require("express");
const { login } = require("../controllers/authController");
const autenticar = require("../middlewares/auth");

const router = Router();

router.post("/login", login);

// rota protegida (exemplo)
router.get("/perfil", autenticar, (req, res) => {
  res.json({ usuario: req.usuario });
});

module.exports = router;
