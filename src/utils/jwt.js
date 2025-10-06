const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

function gerarToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN || "1d" });
}

function verificarToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = { gerarToken, verificarToken };
