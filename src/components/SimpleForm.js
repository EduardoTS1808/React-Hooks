import React from 'react';
import './form1.css'

const Form1 = ({ values, errors, handleChange, handleSubmit }) => {
  return (
    <form  className="formulario" onSubmit={handleSubmit}>
      <div  className='campo-input'>
        <label  className="cr-wrapper" >
          Nome:
          <input className='input'  placeholder='Digite seu nome' type="text" name="inputField" value={values.inputField || ''} onChange={handleChange} />
        </label>
        {errors.inputField && <span>{errors.inputField}</span>}
      </div>
      <div className='campo-input'>
        <label  class="cr-wrapper"> 
         Brazileiro: <input type="checkbox" name="checkboxField" checked={values.checkboxField || false} onChange={handleChange} />
        </label>
        {errors.checkboxField && <span>{errors.checkboxField}</span>}
      </div>
      <div  className='campo-input'>
        <label>
        Selecione sua escolaridade:
          <select name="selectField" value={values.selectField || ''} onChange={handleChange}>
            <option value=""></option>
            <option value="Médio Completo">Médio Completo</option>
            <option value="Superior">Superior</option>
          </select>
        </label>
        {errors.selectField && <span>{errors.selectField}</span>}
      </div>
      <div  className='campo-input'>
        <label className='cr-wrapper'>
        Horário para trabalho:
          <input type="radio" name="radioField" value="diurno" checked={values.radioField === 'diurno'} onChange={handleChange} />
            Diurno
          <input type="radio" name="radioField" value="noturno" checked={values.radioField === 'noturno'} onChange={handleChange} />
          Noturno
        </label>
        {errors.radioField && <span>{errors.radioField}</span>}
      </div>
      <button  className='testbutton'  type="submit">Submit</button>
    </form>
  );
};

export default Form1;
