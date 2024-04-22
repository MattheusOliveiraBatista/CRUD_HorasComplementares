const mysql = require('mysql2');

// Configurações para conexão com o banco de dados MySQL
const conexaoComBancoDeDados = mysql.createConnection({
  host: 'localhost',     // Host do seu banco de dados MySQL
  user: 'root',   // Nome de usuário do MySQL
  password: 'Semitom@29', // Senha do MySQL
  database: 'db_horasComplementares' // Nome do banco de dados que você criou
});

// Estabelece a conexão com o banco de dados
conexaoComBancoDeDados.connect((erro) => {
  if (erro) {
    console.error('Erro ao conectar ao banco de dados:', erro);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados!');
});

module.exports = conexaoComBancoDeDados;
