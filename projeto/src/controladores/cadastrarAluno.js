const pool = require('../conexao');

const cadastrarAluno = async function (req, res) {
    const { nome, responsavel, numero_responsavel, idade, serie } = req.body;

    if (!nome || !responsavel || !numero_responsavel || !idade || !serie) return res.status(400).json({ message: "Todos os campos obrigatórios" });

    try {
        const query = `insert into alunos (nome, responsavel, numero_responsavel, idade, serie) values ($1,$2,$3,$4,$5)`
        const { rows, rowCount } = await pool.query(query, [nome, responsavel, numero_responsavel, idade, serie])

        return res.status(201).json({ message: 'Aluno(a) cadastrado(a)' })

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ menssagem: 'Erro interno do servidor' })
    }

};

module.exports = {
    cadastrarAluno
};