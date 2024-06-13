import React from 'react';
import './form2.css'
const Form2 = ({ values, errors, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>      
      <div>
        <label className='custom_input'>
          Email:
          <input className='input' placeholder='Digite seu email'  type="email" name="email" value={values.email || ''} onChange={handleChange} />
        </label>
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label className='custom_input'>
          Name:
          <input className='input' placeholder='Digite seu nome' type="text" name="name" value={values.name || ''} onChange={handleChange} />
        </label>
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label className='custom_input'>
          Password:
          <input className='input' placeholder='Digite sua senha' type="password" name="password" value={values.password || ''} onChange={handleChange} />
        </label>
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button className='testbutton' type="submit" >Submit</button>
    </form>
  );
};

export default Form2;
