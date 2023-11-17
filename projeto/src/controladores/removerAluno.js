const pool = require('../conexao');

const removerAluno = async function (req, res) {
    const { nome } = req.params;

    if (!nome) return res.status(400).json({ message: "Informar nome do aluno" });
    try {
        const { rows, rowCount } = await pool.query(
            'select * from alunos where nome = $1',
            [nome]
        )
        if (rowCount < 1) {
            return res.status(404).json({ mensagem: 'aluno não encontrado' })
        }

        await pool.query('delete from alunos where nome = $1', [nome])

        return res.status(200).json({ mensagem: "Aluno removido" })

    } catch (error) {
        return res.status(500).json('Erro interno do servidor')
    }

};

module.exports = {
    removerAluno
};