import React, { useState } from 'react';

const FormularioA = ({ handleSubmit, handleBlur, errors, touched }) => {
  const [formData, setFormData] = useState({ nome: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.nome && errors.nome && <span>{errors.nome}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioA;
