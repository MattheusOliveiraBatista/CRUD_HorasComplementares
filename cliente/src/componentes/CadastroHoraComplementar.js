// CadastroHoraComplementar.js

import React, { useState } from 'react';
import axios from 'axios';

function CadastroHoraComplementar() {
  const [dimensao, setDimensao] = useState('');
  const [tipoAtividade, setTipoAtividade] = useState('');
  const [qtdHoras, setQtdHoras] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/horasComplementares', {
        dimensao,
        tipo_atividade: tipoAtividade,
        qtd_horas: qtdHoras
      });
      console.log(response.data);
      setDimensao('');
      setTipoAtividade('');
      setQtdHoras('');
    } catch (error) {
      console.error('Erro ao cadastrar hora complementar:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Cadastro de Horas Complementares</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="dimensao">Dimensão:</label>
          <input type="text" id="dimensao" value={dimensao} onChange={(e) => setDimensao(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="tipoAtividade">Tipo de Atividade:</label>
          <input type="text" id="tipoAtividade" value={tipoAtividade} onChange={(e) => setTipoAtividade(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="qtdHoras">Quantidade de Horas:</label>
          <input type="number" id="qtdHoras" value={qtdHoras} onChange={(e) => setQtdHoras(e.target.value)} />
        </div>
        <button type="submit" className="btn">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroHoraComplementar;
