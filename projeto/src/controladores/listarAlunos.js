const bancodedados = require('../bancodedados');

const listarAlunos = async function (req, res) {
    return res.status(200).json(bancodedados.alunos);
};

module.exports = {
    listarAlunos
};