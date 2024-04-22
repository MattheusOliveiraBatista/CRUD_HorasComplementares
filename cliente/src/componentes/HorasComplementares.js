import React, { useState, useEffect } from 'react';
import axios from 'axios';
import deletarHoraComplementar from './DeletarHorasComplementares';
import '../index.css';

function ListaHorasComplementares() {
  const [horasComplementares, setHorasComplementares] = useState([]);
  const [editandoHora, setEditandoHora] = useState(null);
  const [valoresEditados, setValoresEditados] = useState({});

  useEffect(() => {
    async function fetchHorasComplementares() {
      try {
        const response = await axios.get('http://localhost:3000/horasComplementares');
        setHorasComplementares(response.data);
      } catch (error) {
        console.error('Erro ao obter horas complementares:', error);
      }
    }

    fetchHorasComplementares();
  }, []);

  const handleEditar = (hora) => {
    setEditandoHora(hora);
    setValoresEditados({
      dimensao: hora.dimensao,
      tipo_atividade: hora.tipo_atividade,
      qtd_horas: hora.qtd_horas
    });
  };

  const handleCancelarEdicao = () => {
    setEditandoHora(null);
  };

  const handleConfirmarEdicao = async () => {
    try {
      await axios.put(`http://localhost:3000/horasComplementares/${editandoHora.id}`, valoresEditados);
      const response = await axios.get('http://localhost:3000/horasComplementares');
      setHorasComplementares(response.data);
      setEditandoHora(null);
    } catch (error) {
      console.error('Erro ao atualizar hora complementar:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValoresEditados(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="container">
      <h2 className="title">Lista de Horas Complementares</h2>
      <ul className="horas-list">
        {horasComplementares.map((hora, index) => (
          <li key={index} className="hora-item">
            <div><strong>Dimensão:</strong> {hora.dimensao}</div>
            <div><strong>Tipo de Atividade:</strong> {hora.tipo_atividade}</div>
            <div><strong>Quantidade de Horas:</strong> {hora.qtd_horas}</div>
            <div className="button-group">
              <button className="btn-update" onClick={() => handleEditar(hora)}>Atualizar</button>
              <button className="btn-delete" onClick={() => deletarHoraComplementar(hora.id, setHorasComplementares, horasComplementares)}>Deletar</button>
            </div>
          </li>
        ))}
      </ul>

      {editandoHora && (
        <div className="edit-modal">
          <h3>Editar Hora Complementar</h3>
          <input type="text" name="dimensao" value={valoresEditados.dimensao} onChange={handleChange} />
          <input type="text" name="tipo_atividade" value={valoresEditados.tipo_atividade} onChange={handleChange} />
          <input type="number" name="qtd_horas" value={valoresEditados.qtd_horas} onChange={handleChange} />
          <button onClick={handleCancelarEdicao}>Cancelar</button>
          <button onClick={handleConfirmarEdicao}>Confirmar</button>
        </div>
      )}
    </div>
  );
}

export default ListaHorasComplementares;
