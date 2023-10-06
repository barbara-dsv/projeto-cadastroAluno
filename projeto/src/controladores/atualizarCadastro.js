const bancodedados = require('../bancodedados');

const atualizarAluno = async function (req, res) {
    const { idAluno } = req.params;
    const { numero, idade, serie } = req.body;

    const aluno = bancodedados.alunos.find(aluno => aluno.idAluno === Number(idAluno));
    if (!aluno) return res.status(400).json({ message: "Aluno não existente." });

    if (!numero && !idade && !serie) { return res.status(400).json({ message: "Pelo menos um do(s) campo(s) devem ser enviado(os): numero,idade, serie " }) };

    if (numero) aluno.numero = numero;
    if (idade) aluno.idade = idade;
    if (serie) aluno.serie = serie;

    return res.status(200).json({ message: "Aluno atualizado com sucesso!" });

};

module.exports = {
    atualizarAluno
};