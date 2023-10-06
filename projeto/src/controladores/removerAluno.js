let bancodedados = require('../bancodedados');

const removerAluno = async function (req, res) {
    const { idAluno } = req.params;

    if (!idAluno) return res.status(400).json({ message: "Informar idAluno" });

    let alunoIndex = bancodedados.alunos.findIndex(aluno => aluno.idAluno === Number(idAluno));
    if (alunoIndex === -1) {
        return res.status(400).json({ message: "Aluno não existente." });
    }

    bancodedados.alunos.splice(alunoIndex, 1);

    return res.status(200).json({ mensagem: "Aluno removido" })
};

module.exports = {
    removerAluno
};