// Armazena tokens inválidos temporariamente em memória
const blacklist = new Set();

module.exports = {
  add: (token) => blacklist.add(token),
  has: (token) => blacklist.has(token)
};
