const pool = require('../conexao');

const listarAlunos = async function (req, res) {
    try {
        const { rows } = await pool.query(`select * from alunos`)
        return res.json(rows)
    } catch (error) {
        return res.status(500).json('Erro interno do servidor')
    }
};

module.exports = {
    listarAlunos
};