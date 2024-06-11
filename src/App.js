import React from 'react';
import FormularioA from './components/SimpleForm';
import FormularioB from './components/SimpleForm2';
import withValidation from './components/withFormHandling1';

const validationRulesA = {
  nome: { required: true },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
};

const validationRulesB = {
  username: { required: true },
  password: { required: true, minLength: 6 }
};

const ValidatedFormularioA = withValidation(FormularioA, validationRulesA);
const ValidatedFormularioB = withValidation(FormularioB, validationRulesB);

const App = () => {
  const handleSubmitA = (e) => {
    e.preventDefault();
    console.log('Formulário A enviado com sucesso!');
  };

  const handleSubmitB = (e) => {
    e.preventDefault();
    console.log('Formulário B enviado com sucesso!');
  };

  return (
    <div>
      <h1>Formulários Validados com HOC</h1>
      <h2>Formulário A</h2>
      <ValidatedFormularioA onSubmit={handleSubmitA} />
      <h2>Formulário B</h2>
      <ValidatedFormularioB onSubmit={handleSubmitB} />
    </div>
  );
};

export default App;
