const knex = require("knex")(require("../../knexfile").development);
const bcrypt = require("bcrypt");
const { gerarToken } = require("../utils/jwt");

async function login(req, res) {
  const { nome, senha } = req.body;

  const usuario = await knex("usuarios").where({ nome }).first();

  if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado" });

  // const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);

  console.log("Senha digitada:", senha);
  console.log("Hash no banco:", usuario.senha_hash);

  const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);
  console.log("Resultado compare:", senhaCorreta);

  if (!senhaCorreta) return res.status(401).json({ erro: "Senha incorreta" });

  const token = gerarToken({
    id: usuario.id,
    nome: usuario.nome,
    tipo: usuario.tipo_usuario,
  });

  return res.json({ token });
}

module.exports = { login };
