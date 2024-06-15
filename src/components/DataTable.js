
////////////////////////////////////////////

import React from 'react';

const  DataTable = ({ data, onDelete, maisAntigo, maisRecente}) => {
  
  return (
    <div>
      <button onClick={maisAntigo}>Mais Antigo</button>
      <button onClick={maisRecente}>Mais Recente</button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>__
            <th>Brasileiro</th>__
            <th>Escolaridade / Email</th>__
            <th>Hr Trabalho</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{(item.inputValue) || (item.name)} </td>|
              <td> {(item.checkboxValue === true) ? 'Sim' : 'Não'} </td>|
              <td> {(item.selectValue) || (item.email)}</td>|
              <td> {(item.radioValue) ?  item.radioValue : '---'}</td>
              <td>
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default  DataTable;