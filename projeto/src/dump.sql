create database cadastro_aluno;

create table alunos (
	id serial primary key,
  nome text not null, 
  responsavel text , 
  numero_responsavel char (11), 
  idade integer, 
  serie text,
  data_inicio timestamp default now()
)