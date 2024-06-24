const express = require('express');
const helmet = require("helmet");
const cors = require('cors');
const areasRouter = require('./controllers/areaController');
const disciplinasRouter = require('./controllers/disciplinasController');
const loginRouter = require('./controllers/LoginController');
const planodeaulaRouter = require('./controllers/planodeaulaController');
const generoRouter = require('./controllers/generoController');
const questoesRouter = require('./controllers/questoesController');
const formulasRouter = require('./controllers/formulasController');
const musicasRouter = require('./controllers/musicasController');

// Cria uma instância do servidor Express.
const app = express();

// Aplica o middleware para parsear JSON no corpo das requisições.
app.use(express.json());

// Habilita o CORS para permitir requisições de diferentes origens.
app.use(helmet());
//app.use(cors());

// Define a rota "/tarefas" e associa ao router importado.
app.use("/login", loginRouter);
app.use("/areas", areasRouter);
app.use("/disciplinas", disciplinasRouter);
app.use("/planodeaula", planodeaulaRouter);
app.use("/genero", generoRouter);
app.use("/questoes", questoesRouter);
app.use("/formulas", formulasRouter);
app.use("/musicas", musicasRouter);

// Define a porta do servidor, com um fallback para a porta 3000 se não estiver definida.
const PORT = process.env.PORT || 3000;

// Inicia o servidor na porta especificada.
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});