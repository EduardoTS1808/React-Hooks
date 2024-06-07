import React, { useState } from 'react';
import Formulario from './Formulario';
import Tabela from './Tabela';

const App = () => {
  const [tableData, setTableData] = useState([]);

  const addDataToTable = (data) => {
    setTableData([...tableData, data]);
  };

  return (
    <div>
      <h1>Formulário e Tabela</h1>
      <Formulario addDataToTable={addDataToTable} />
      <Tabela data={tableData} />
    </div>
  );
};

export default App; 
