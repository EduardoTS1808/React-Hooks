import React,{Component} from 'react';

class SimpleForm extends Component {
  render() {
    const { formData, handleInputChange, handleSubmit } = this.props;
   
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
            onBlur={(e) => {
                console.log( e.target);
            }}
          />
          
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='exemplo@gmail.com'
            value={formData.email || ''}
            onChange={handleInputChange}
            onBlur={(e) => {
              // fazer com que esta funcao venha por props do componente pai
              //assim eu consigo alterar a propriedade 'valido' do formDate evitando o envio com este campo vazio. 
              const regEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/i;
              if (regEmail.test(e.target.value)) {
                console.log('ok' , regEmail.test(e.target.value));
              } else {
                console.log('err', regEmail.test(e.target.value));
              }
             
            }}
          
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
                    placeholder='000.000.000-00'
                    value={formData.cpf}
                    onChange={handleInputChange}
                    onBlur={(e) => {
                      // fazer com que esta funcao venha por props do componente pai
                      //assim eu consigo alterar a propriedade 'valido' do formDate evitando o envio com este campo vazio. 

                      const regCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/; 
                      if (regCpf.test(e.target.value)) {
                        console.log('ok' , regCpf.test(e.target.value));
                      } else {
                        console.log('err', regCpf.test(e.target.value));
                  
                      }
                     
                    }}
                  />
                  <span>{<p>campo obrigatorio</p>}</span>
                  
                </div>
      </div>
        <button type="submit">Enviar</button>
      
      </form>
    );
  }
}

export default SimpleForm;
