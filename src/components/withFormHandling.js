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
      e.preventDefault()
    console.log(this.state.formData)
    };  

    render() {
      return (
        <WrappedComponent
          formData={this.state.formData}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
         
          {...this.props}
        />
      );
    }
  };
}

export default withFormHandling;