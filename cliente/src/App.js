// App.js

import React from 'react';
import CadastroHoraComplementar from './componentes/CadastroHoraComplementar'; // Importar o componente de cadastro
import HorasComplementares from './componentes/HorasComplementares'; // Importar o componente de lista
import './index.css'; // Importe o arquivo de estilos aqui

function App() {
  return (
    <div>
      <CadastroHoraComplementar />
      <HorasComplementares/> 
    </div>
  );
}

export default App;
