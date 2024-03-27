import React,{Component} from 'react';

class SimpleForm extends Component {
  render() {
    const {dados, handleInputChange, handleSubmit } = this.props;
   
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input 
            type="text"
            id="name"
            name="usuario" 
            value={dados.usuario}
            onChange={handleInputChange}
       
          />
          {dados.errors && <p>{dados.errors.usuario}</p>}
              <div>
          <label htmlFor="email">E-mail:</label>
          <input

            type="text"
            id="email"
            name="email"
            placeholder='exemplo@gmail.com'
            value={dados.email || ''}
            onChange={handleInputChange}
          />
     {dados.errors && <p>{dados.errors.email}</p>}
        </div>
  
        <div>
                  <label htmlFor="cpf">CPF:</label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    placeholder='000.000.000-00'
                    value={dados.cpf}
                    onChange={handleInputChange}
                  
                  />
                   {dados.errors && <p>{dados.errors.cpf}</p>}
                </div>
               
        </div>
        <button type="submit" >Enviar</button>
        {dados.ok && <p>{dados.ok}</p>}
       
      <div>
         
      </div>
      </form>
    );
  }
}

export default SimpleForm;
