// src/App.js
import React, { useState } from 'react';
import withValidation from './components/withFormHandling1';
import Form1 from './components/SimpleForm';
import Form2 from './components/SimpleForm2';
import DataTable from './components/DataTable';

const ValidatedForm1 = withValidation(Form1);
const ValidatedForm2 = withValidation(Form2);

const App = () => {
  const [data, setData] = useState([]);

  const handleForm1Submit = (formData) => {
    setData(prevData => [...prevData, formData]);
  };

  const handleForm2Submit = (formData) => {
    setData(prevData => [...prevData, formData]);
  };

  const handleDelete = (index) => {
    setData(prevData => prevData.filter((_, i) => i !== index));
  };

  const form1Validations = {
    inputField: (value) => value ? null : 'Input is required',
    checkboxField: (value) => value ? null : 'Checkbox must be checked',
    selectField: (value) => value ? null : 'Select an option',
    radioField: (value) => value ? null : 'Select a radio option',
  };

  const form2Validations = {
    email: (value) => /\S+@\S+\.\S+/.test(value) ? null : 'Email is invalid',
    name: (value) => value ? null : 'Name is required',
    password: (value) => value.length >= 6 ? null : 'Password must be at least 6 characters',
  };

  return (
    <div>
      <h1>Form 1</h1>
      <ValidatedForm1 onSubmit={handleForm1Submit} validations={form1Validations} />

      <h1>Form 2</h1>
      <ValidatedForm2 onSubmit={handleForm2Submit} validations={form2Validations} />

      <h1>Data Table</h1>
      <DataTable data={data} onDelete={handleDelete} />
    </div>
  );
};

export default App;
