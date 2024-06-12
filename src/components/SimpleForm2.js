import React from 'react';

const Form2 = ({ values, errors, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={values.email || ''} onChange={handleChange} />
        </label>
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={values.name || ''} onChange={handleChange} />
        </label>
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" value={values.password || ''} onChange={handleChange} />
        </label>
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form2;
