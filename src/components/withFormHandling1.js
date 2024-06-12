import React, { useState } from 'react';

const withValidation = (WrappedComponent) => {
  return ({ onSubmit, validations, ...props }) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setValues({
        ...values,
        [name]: type === 'checkbox' ? checked : value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = validate(values);
      setErrors(newErrors);

      const isValid = Object.values(newErrors).every(error => error === null);

      if (isValid) {
        onSubmit(values);
        setValues({});
      }
    };

    const validate = (values) => {
      const errors = {};
      for (const key in validations) {
        if (validations.hasOwnProperty(key)) {
          const error = validations[key](values[key]);
          errors[key] = error;
        }
      }
      return errors;
    };

    return (
      <WrappedComponent
        {...props}
        values={values}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  };
};

export default withValidation;
