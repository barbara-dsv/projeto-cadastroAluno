const { format } = require('date-fns');
const bancodedados = require('../bancodedados');

let idAluno = 2;
const cadastrarAluno = async function (req, res) {
    const { nome, responsavel, numero, idade, serie } = req.body;

    if (!nome || !responsavel || !numero || !idade || !serie) return res.status(400).json({ message: "Campos obrigatórios: nome, responsavel, idade, serie, numero" });

    const dataInicio = format(new Date(), 'dd-MM-yyyy');
    const aluno = {
        idAluno: idAluno++,
        nome,
        responsavel,
        numero,
        idade,
        serie,
        dataInicio
    }
    bancodedados.alunos.push(aluno);
    return res.status(201).json({ message: "Aluno cadastrado" });

};

module.exports = {
    cadastrarAluno
};