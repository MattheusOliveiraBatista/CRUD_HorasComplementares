// DeletarHorasComplementares.js

import axios from 'axios';

async function deletarHoraComplementar(id, setHorasComplementares, horasComplementares) {
  try {
    await axios.delete(`http://localhost:3000/horasComplementares/${id}`);
    setHorasComplementares(horasComplementares.filter(hora => hora.id !== id));
  } catch (error) {
    console.error('Erro ao deletar hora complementar:', error);
  }
}

export default deletarHoraComplementar;
