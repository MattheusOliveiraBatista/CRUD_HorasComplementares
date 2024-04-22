
const db = require('../conexao.js');

// Controlador para obter todas as horas complementares do banco de dados
function getHorasComplementares(req, res) {
  db.query('SELECT * FROM tb_horas_complementares', (err, resultado) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao obter as horas complementares.' });
      return;
    }
    res.status(200).json(resultado);
  });
}

// Controlador para inserir horas complementares no banco de dados
async function inserirHoraComplementar(req, res) {
  
    const novasHorasComplementares = req.body;

    if(novasHorasComplementares.length == undefined || novasHorasComplementares.length == 0){
      const {dimensao, tipo_atividade, qtd_horas} = req.body;

        await new Promise((resolve, reject) => {
          db.query(
              'INSERT INTO tb_horas_complementares (dimensao, tipo_atividade, qtd_horas) VALUES (?, ?, ?)',
              [dimensao, tipo_atividade, qtd_horas],
              (erro, resultado) => {
                  if (erro) {
                      reject(erro);
                      return;
                  }
                  resolve();
              }
          );
      });

      res.status(201).json({ message: 'A nova hora complementar foi adicionada com sucesso!' });

    }

    

    try {
        for (let i = 0; i < novasHorasComplementares.length; i++) {
            const { dimensao, tipo_atividade, qtd_horas } = novasHorasComplementares[i];
            console.log(dimensao);
            console.log(tipo_atividade);
            console.log(qtd_horas);
            console.log("\n\n");

            await new Promise((resolve, reject) => {
                db.query(
                    'INSERT INTO tb_horas_complementares (dimensao, tipo_atividade, qtd_horas) VALUES (?, ?, ?)',
                    [dimensao, tipo_atividade, qtd_horas],
                    (erro, resultado) => {
                        if (erro) {
                            reject(erro);
                            return;
                        }
                        resolve();
                    }
                );
            });
            res.status(201).json({ message: 'Todas as novas horas complementares foram inseridas com sucesso!' });

        }
    } catch (error) {
        console.error('Erro ao inserir novas horas complementares:', error);
        res.status(500).json({ error: 'Erro ao inserir novas horas complementares.' });
    }
}

// Controlador para buscar uma hora complementar pelo ID
function getHoraComplementarPorId(req, res) {
    const id = req.params.id;
  
    db.query('SELECT * FROM tb_horas_complementares WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error('Erro ao buscar hora complementar por ID:', err);
        res.status(500).json({ error: 'Erro ao buscar hora complementar por ID.' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Hora complementar não encontrada.' });
        return;
      }
      res.json(results[0]);
    });
}

// Controlador para atualizar uma hora complementar pelo ID
function atualizarHoraComplementar(req, res) {
    const id = req.params.id;
    const { dimensao, tipo_atividade, qtd_horas } = req.body;
  
    db.query(
      'UPDATE tb_horas_complementares SET dimensao = ?, tipo_atividade = ?, qtd_horas = ? WHERE id = ?',
      [dimensao, tipo_atividade, qtd_horas, id],
      (err, results) => {
        if (err) {
          console.error('Erro ao atualizar hora complementar:', err);
          res.status(500).json({ error: 'Erro ao atualizar hora complementar.' });
          return;
        }
        res.status(200).json({ message: 'Hora complementar atualizada com sucesso!' });
      }
    );
}
  
// Controlador para deletar uma hora complementar pelo ID
function deletarHoraComplementar(req, res) {
    const id = req.params.id;
  
    db.query('DELETE FROM tb_horas_complementares WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error('Erro ao deletar hora complementar:', err);
        res.status(500).json({ error: 'Erro ao deletar hora complementar.' });
        return;
      }
      res.status(200).json({ message: 'Hora complementar deletada com sucesso!' });
    });
}
  
module.exports = { getHorasComplementares, getHoraComplementarPorId, inserirHoraComplementar, atualizarHoraComplementar, deletarHoraComplementar };