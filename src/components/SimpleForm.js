import React,{Component} from 'react';

class SimpleForm extends Component {
  render() {
    const { formData, handleInputChange, handleSubmit,handleOnChangevalidar, cpfMask } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="number"
            id="telefone"
            name="telefone"
            value={formData.telefone || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className='endereco'> <h5>Endereço</h5>
      
                <div>
                  <label htmlFor="rua">Rua:</label>
                  <input
                    type="text"
                    id="rua"
                    name="rua"
                    value={formData.rua || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="cidade">Cidade:</label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    value={formData.cidade || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="estado">Estado:</label>
                  <input
                    type="text"
                    id="estado"
                    name="estado"
                    value={formData.estado || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="cpf">CPF:</label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleInputChange}
                  />
                </div>
      </div>
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleOnChangevalidar}>testar</button>
      </form>
    );
  }
}

export default SimpleForm;
