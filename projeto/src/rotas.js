const express = require('express');


const { cadastrarAluno } = require('./controladores/cadastrarAluno');
const { atualizarAluno } = require('./controladores/atualizarCadastro');
const { removerAluno } = require('./controladores/removerAluno');
const { listarAlunos } = require('./controladores/listarAlunos');


const rotas = express();

rotas.get('/alunos', listarAlunos);
rotas.post('/alunos', cadastrarAluno);
rotas.put('/aluno/:idAluno', atualizarAluno);
rotas.delete('/aluno/:idAluno', removerAluno);

module.exports = {
    rotas
};