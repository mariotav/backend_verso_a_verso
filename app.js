const express = require('express');
const helmet = require("helmet");
const cors = require('cors');
const tarefasRouter = require('./controllers/TarefaController');
const areasRouter = require('./controllers/areaController');
const disciplinasRouter = require('./controllers/disciplinasController');
const formulaRouter = require('./controllers/formulasController');
const cronogramaRouter = require('./controllers/cronogramaController');
const loginRouter = require('./controllers/LoginController');

// Cria uma instância do servidor Express.
const app = express();

// Aplica o middleware para parsear JSON no corpo das requisições.
app.use(express.json());

// Habilita o CORS para permitir requisições de diferentes origens.
app.use(helmet());
//app.use(cors());

// Define a rota "/tarefas" e associa ao router importado.
app.use("/tarefas", tarefasRouter);
app.use("/login", loginRouter);
app.use("/areas", areasRouter);
app.use("/disciplinas", disciplinasRouter);
app.use("/cronograma", cronogramaRouter);
app.use("/formula", formulaRouter);

// Define a porta do servidor, com um fallback para a porta 3000 se não estiver definida.
const PORT = process.env.PORT || 3000;

// Inicia o servidor na porta especificada.
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});