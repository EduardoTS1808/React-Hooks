import React from 'react';
import useForm from './withFormHandlingRefatorado';

const AnotherFormComponent = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useForm(
    {
      fullName: '',
      address: '',
      phoneNumber: ''
    },
    {
      fullName: (value) => (value.trim() === '' ? 'Campo nome é obrgatório!' : null),
      address: (value) => (value.trim() === '' ? 'Senha é obrigatória!' : null),
      phoneNumber: (value) => (!/^\d{10}$/.test(value) ? 'informe um numero válido!' : null)
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullName" value={values.fullName} placeholder="digite um Nome" onChange={handleChange} onBlur={handleBlur} />
      {touched.fullName && errors.fullName && <span>{errors.fullName}</span>}

      <input type="text" name="address" value={values.address} placeholder="digite uma Senha" onChange={handleChange} onBlur={handleBlur} />
      {touched.address && errors.address && <span>{errors.address}</span>}

      <input type="text" name="phoneNumber" value={values.phoneNumber} placeholder="(85) 91234567" onChange={handleChange} onBlur={handleBlur} />
      {touched.phoneNumber && errors.phoneNumber && <span>{errors.phoneNumber}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default AnotherFormComponent;
// este é outro formulário diferente para usar com o mesmo Hook -- withFormHandlingRefatorado