import React,{Component} from 'react';
import SimpleForm from '../../components/SimpleForm'
import withFormHandlingRefatorado from '../../components/withFormHandlingRefatorado'

class MyFormComponent extends Component {
  render() {
    const FormWithHandling = withFormHandlingRefatorado(SimpleForm);
      return(
        <FormWithHandling/>
      )
  }
}

export default MyFormComponent;


