
import React, { useState } from 'react';
import withValidation from './components/withFormHandling1';
import Form1 from './components/SimpleForm';
import Form2 from './components/SimpleForm2';
import DataTable from './components/DataTable';
import Spinner from './components/Spinner/Spinner'

const ValidatedForm1 = withValidation(Form1);
const ValidatedForm2 = withValidation(Form2);
const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  document.body.addEventListener('submit',(e)=>{ 
    e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);

    })

  
  const handleAdd = (item) => {
    if (editingIndex !== null) {
      const newData = [...data];
      newData[editingIndex] = item;
      setData(newData);
      setEditingIndex(null);
    } else {
      setData([...data, item]);
    }
  };
  const handleForm2Submit = (formData) => {
    setData(prevData => [...prevData, formData]);
  };

  const Delete = (index) => {
    setData(prevData => prevData.filter((_, i) => i !== index));
  };
  const maisAntigo = () => {
    const sortedData = [...data].sort((a, b) => a.timestamp - b.timestamp);
    setData(sortedData);
  };

  const maisRecente = () => {
    const sortedData = [...data].sort((a, b) => b.timestamp - a.timestamp);
    setData(sortedData);
  };
  const handleEdi = (index) => {
    setEditingIndex(index);
  };
  const form1Validations = {
    inputField: (value) => value ? null : 'Campo nome Vazio!',
    checkboxField: (value) => value ? null : 'Selecione sua naturalidade',
    selectField: (value) => value ? null : 'Selecione sua Escolaridade',
    radioField: (value) => value ? null : 'Marqui o melhor horário',
  };

  const form2Validations = {
    email: (value) => /\S+@\S+\.\S+/.test(value) ? null : 'Email está Inválido',
    name: (value) => value ? null : 'Campo nome vazio!',
    password: (value) => value.length >= 6 ? null : 'Por favor digite uma senha, pelo menos 6 caractéres.',
  };
  /////////////







  return (
    <div>
      {loading ? <Spinner/> : <div>
        <h2>Formulário para novos candidatos</h2>
      <ValidatedForm1  onAdd={handleAdd} validations={form1Validations} />

      <h2>Login para usuários.</h2>
      <ValidatedForm2 onAdd={handleAdd} onSubmit={handleForm2Submit} validations={form2Validations} />

      <h2>Lista de Candidatos</h2>
      <DataTable data={data} onDelete={Delete} onEdit={handleEdi}  maisAntigo={maisAntigo} maisRecente={maisRecente}/>
        </div>}
  
    
    </div>


  
  );
};

export default App;

///////////////////////////////////////////////

