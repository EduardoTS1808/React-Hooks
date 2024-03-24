import React,{Component} from 'react';

function withFormHandling(WrappedComponent) {
  return class  extends Component {
    constructor(props) {
      super(props);
      this.state = {
        formData: {},
      };
    }

    handleInputChange = (e) => {
      const { name, value } = e.target;

      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [name]: value,
        },
      }));
    };

    handleSubmit = (e) => {
      e.preventDefault();
      // Lógica para lidar com o envio do formulário
       console.log(this.state.formData)
      
    };
   
    
    handleOnChangevalidar =(e)=>{
      // const email = 'eduardo12@gmail.com'
      const regEmial = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/i;
      const email = this.state.formData.email
      regEmial.test(email)? console.log('email ok'): console.log('email erro')


      const regCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;   
      const cpf = this.state.formData.cpf;
    

      regCpf.test(cpf)? console.log('cpf ok'): console.log('cpf erro')
      // console.log(cpfMask.test(cpf))

    }

    render() {
      return (
        <WrappedComponent
          formData={this.state.formData}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          handleOnChangevalidar={this.handleOnChangevalidar}
          cpfMask={this.cpfMask}
          {...this.props}
        />
      );
    }
  };
}

export default withFormHandling;