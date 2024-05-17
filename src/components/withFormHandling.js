import React,{Component} from 'react';
import Tabela from  '../components/tabela'
import Spinner from '../components/spinner/spinner'

 export default function withFormHandling(WrappedComponent) {
  return class  extends Component {
    constructor(props){
      super(props)
      this.state = { usuario:'', email:'', cpf:'' , prof:'', fram: '', skills:[],
      
    }
    this.ListCandidatos = [];
    }
    handleInputChange = (e)=>{
      this.changerField(e.target.name, e.target.value)
    }
    changerField(field, value){
      this.setState({[field]:value})
    }
    handleRadioChange = (event) => {
      const dados =  this.state
      const { value} = event.target;
      this.setState( {...dados, fram: value}) 
     }
    handleCheckChange = (event) => {
      const dados =  this.state
      const { value} = event.target;
  
      this.setState( {...dados, skills:value}) 
     }
    handleReload = () => {
     
      this.setState({ enviar : false})
      

}
  
  
 
    handleSubmit = (e) => {
      e.preventDefault()
      const { usuario, email, cpf , prof} = this.state;
      const regEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/i;
      const regCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    
      if (!usuario || usuario === "" ) {
        this.setState({ errors:{usuario:"Por favor, preencha o campo de usuário!"} });
        return false
      }
      if (!prof || prof === "" ) {
        this.setState({ errors:{prof:"Por favor, preencha sua profissão"} });
      
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
      this.ListCandidatos.push(this.state)
      this.setState({ enviar : true})
      setTimeout(() => {
        this.setState({ enviar :false})
        
      }, 2000);
    
        
      
      return
    
        
        
      }

    render() {
      return (
        <>
        {!this.state.enviar &&
<>
          <WrappedComponent
          {...this.props}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          dados={this.state}
          propOnChangeOp={this.onChangerOptions}
          onRadio={this.handleRadioChange}
          onCheck={this.handleCheckChange}
          />
       
        <Tabela lista={this.ListCandidatos}/>
        </> ||
         <Spinner/>

}
</>
      );
    }
  };
 }