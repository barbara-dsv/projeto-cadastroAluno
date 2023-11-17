const pool = require('../conexao');

const atualizarAluno = async function (req, res) {
    const { nome } = req.params;
    const { numero_responsavel, idade, serie } = req.body;

    try {
        const { rows, rowCount } = await pool.query(`select * from alunos where nome = $1`, [nome])
        if (rowCount < 1) {
            return res.status(404).json({ mensagem: 'aluno não cadastrado' })
        }

        if (numero_responsavel !== undefined) {
            await pool.query(`update alunos set numero_responsavel = $1 where nome = $2`, [numero_responsavel, nome])
        }
        if (idade !== undefined) {
            await pool.query(`update alunos set idade = $1 where nome = $2`, [idade, nome])
        }
        if (serie !== undefined) {
            await pool.query(`update alunos set serie = $1 where nome = $2`, [serie, nome])
        }

        return res.status(204).send()

    } catch (error) {
        console.log(error.message)
        return res.status(500).json('Erro interno do servidor')
    }


};

module.exports = {
    atualizarAluno
};