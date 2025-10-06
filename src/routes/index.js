const { Router } = require("express");
const { login } = require("../controllers/authController");
const autenticar = require("../middlewares/auth");
const somenteAdmin = require("../middlewares/somenteAdmin");

const router = Router();

// Rota pública
router.post("/login", login);

// Rota protegida (exemplo)
router.get("/perfil", autenticar, (req, res) => {
  res.json({
    mensagem: "Você está autenticado!",
    usuario: req.usuario,
  });
});

// Rota somente admin (exemplo)
router.get("/admin/teste", autenticar, somenteAdmin, (req, res) => {
  res.json({ mensagem: "Bem-vindo, administrador!" });
});

module.exports = router;
