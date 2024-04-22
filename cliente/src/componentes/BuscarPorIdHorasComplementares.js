// BuscarPorIdHorasComplementares.js

import axios from 'axios';

async function buscarHoraComplementarPorId(id) {
  try {
    const response = await axios.get(`http://localhost:3000/horasComplementares/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar hora complementar por ID:', error);
    return null;
  }
}

export default buscarHoraComplementarPorId;
