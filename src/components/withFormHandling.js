import React,{Component} from 'react';
// import RSucesso from './Respostas/RSucesso';
function withFormHandling(WrappedComponent) {
  return class  extends Component {
    state = {
      
      };
    handleInputChange = (event)=>{
      this.changerField(event.target.name, event.target.value)
    }
    changerField(field, value){
     this.setState({[field]:value})
    }
    handleSubmit = (e) => {
      e.preventDefault()
      const { usuario, email, cpf} = this.state;
      const regEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/i;
      const regCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
      if (!usuario || usuario === "" ) {
        this.setState({ errors:{usuario:"Por favor, preencha o campo de usuário!"} });
        return false
      }
    
      if(!email || !regEmail.test(email)){
        this.setState({ errors:{email:"Por favor, preencha o campo de email corretamente!"} });
          return false

      }
      if(!cpf || !regCpf.test(cpf)){
        this.setState({ errors:{cpf:"Por favor, preencha o campo de cpf corretamente!"} });
          return false
      }
        this.setState({ ok : "enviado com sucesso!"})
      return
    }; 

  

    render() {
      return (
        <WrappedComponent
        {...this.props}
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleInputChange}
        dados={this.state}
        />
      );
    }
  };
}

export default withFormHandling;