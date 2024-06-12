import React from 'react';

const Form1 = ({ values, errors, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Input:
          <input type="text" name="inputField" value={values.inputField || ''} onChange={handleChange} />
        </label>
        {errors.inputField && <span>{errors.inputField}</span>}
      </div>
      <div>
        <label>
          Checkbox:
          <input type="checkbox" name="checkboxField" checked={values.checkboxField || false} onChange={handleChange} />
        </label>
        {errors.checkboxField && <span>{errors.checkboxField}</span>}
      </div>
      <div>
        <label>
          Select:
          <select name="selectField" value={values.selectField || ''} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </label>
        {errors.selectField && <span>{errors.selectField}</span>}
      </div>
      <div>
        <label>
          Radio:
          <input type="radio" name="radioField" value="option1" checked={values.radioField === 'option1'} onChange={handleChange} />
          Option 1
          <input type="radio" name="radioField" value="option2" checked={values.radioField === 'option2'} onChange={handleChange} />
          Option 2
        </label>
        {errors.radioField && <span>{errors.radioField}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form1;
