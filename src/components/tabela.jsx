import React from 'react';
import './tabelaCSS.css'
const SimpleTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th  scope="col" >Nome</th>
          <th  scope="col">Profissão</th>
          <th  scope="col"> Email</th>
        </tr>
      </thead>
      <tbody>
   
        {
            props.lista.map(
              (item) => (
                    <tr key={item.index}>
                        <th scope="row">{item.username }</th>
                      <td>{item.gender}</td>
                      <td>{item.email}</td>
                    </tr>
                   
                    
                   
                  )
                )
        }
       
      </tbody>
    </table>
  );
}

export default SimpleTable;
