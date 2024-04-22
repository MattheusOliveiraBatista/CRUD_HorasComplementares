
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

const horasComplementaresControle = require('./controles/horasComplementaresControle');
const port = 3000;

// Rota para obter todas as horas complementares
app.get('/horasComplementares', horasComplementaresControle.getHorasComplementares);

// Rota para inserir uma nova hora complementar
app.post('/horasComplementares', horasComplementaresControle.inserirHoraComplementar);

// Rota para obter todas as horas complementares por um id
app.get('/horasComplementares/:id', horasComplementaresControle.getHoraComplementarPorId);

// Rota para obter atualizar um registro de horas complementares pelo id
app.put('/horasComplementares/:id', horasComplementaresControle.atualizarHoraComplementar);

// Rota para apagar um registro de horas complementares pelo id
app.delete('/horasComplementares/:id', horasComplementaresControle.deletarHoraComplementar);



app.listen(port, () => {
  console.log(`Servidor Node.js rodando em http://localhost:${port}`);
});
