
import React from 'react';

const DataTable = ({ data, onDelete }) => {
  if (data.length === 0) return <p>Lista Vazia!</p>;

  const headers = Object.keys(data[0]);

  return (
    <table>
      <thead>
       
        <tr>
        <th>Nome</th>
        <th></th>
        <th>Escolaridade</th>
        <th>Horário trabalho</th>
        <th>deletar</th>
   
     
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map(header => (
              <>
              <td key={header} style={{ cursor: 'pointer' }}>
                {row[header]}
              </td>
              </>
            ))}
        <button onClick={() => onDelete(index)} >Delete</button>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
