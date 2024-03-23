import React,{Component} from 'react';
import withFormHandling from '../../components/withFormHandling';
import SimpleForm from '../../components/SimpleForm';

class MyFormComponent extends Component {
  render() {
    const FormWithHandling = withFormHandling(SimpleForm);
      return(
        <FormWithHandling/>
      )
  }
}

export default MyFormComponent;
