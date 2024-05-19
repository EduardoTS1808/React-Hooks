import React,{Component} from 'react';
import withFormHandling from '../../components/withFormHandling';
import SimpleForm from '../../components/SimpleForm';
import SimpleForm2 from '../../components/SimpleForm2'
import withFormHandlingRefatorado from '../../components/withFormHandlingRefatorado'

class MyFormComponent extends Component {
  render() {
    // const FormWithHandling = withFormHandling(SimpleForm);
    const FormWithHandling = withFormHandlingRefatorado(SimpleForm2);
      return(
        <FormWithHandling/>
      )
  }
}

export default MyFormComponent;


