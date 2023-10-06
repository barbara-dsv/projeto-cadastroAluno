const express = require('express');

const { listarAlunos } = require("./controladores/listar");
const { cadastrarAluno } = require('./controladores/cadastrarAluno');
const { atualizarAluno } = require('./controladores/atualizarCadastro');
const { deletarAluno } = require('./controladores/deletarAluno');

const rotas = express();

rotas.get('/alunos', listarAlunos);
rotas.post('/alunos', cadastrarAluno);
rotas.put('/aluno/:idAluno', atualizarAluno);
rotas.delete('/aluno/:idAluno', deletarAluno);

module.exports = {
    rotas
};