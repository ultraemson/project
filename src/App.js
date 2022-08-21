import React from 'react';

import Tabela from './Tabela';
import DisciplinaItem from './componentes/disciplinas/Requisitos';
function App() {
  const dados = [
    { Horario: '  ',Segunda: '  ', Terça: '  ',Quarta: '   ',Quinta:'', Sexta:'  '}
  ]
  return (
    <div >
      <Tabela dados = { dados } />
    </div>
  );
}

export default App;
