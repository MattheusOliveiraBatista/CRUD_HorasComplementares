import axios from 'axios';

async function atualizarHoraComplementar(id, dadosAtualizados, setHorasComplementares) {
  try {
    await axios.put(`http://localhost:3000/horasComplementares/${id}`, dadosAtualizados);
    // Atualizar a lista de horas complementares após a atualização
    const response = await axios.get('http://localhost:3000/horasComplementares');
    setHorasComplementares(response.data);
  } catch (error) {
    console.error('Erro ao atualizar hora complementar:', error);
  }
}

export default atualizarHoraComplementar;
