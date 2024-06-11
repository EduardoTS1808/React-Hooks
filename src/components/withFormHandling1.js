import React, { useState } from 'react';

const withValidation = (WrappedComponent, validationRules) => {
  return (props) => {
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validate = (name, value) => {
      let error = '';
      if (validationRules[name]) {
        if (validationRules[name].required && !value) {
          error = `${name} é obrigatório.`;
        } else if (validationRules[name].pattern && !validationRules[name].pattern.test(value)) {
          error = `${name} é inválido.`;
        }
      }
      return error;
    };

    const handleBlur = (e) => {
      const { name, value } = e.target;
      const error = validate(name, value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error
      }));
      setTouched((prevTouched) => ({
        ...prevTouched,
        [name]: true
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const formElements = e.target.elements;
      let newErrors = {};
      let isValid = true;

      for (let element of formElements) {
        if (element.name) {
          const error = validate(element.name, element.value);
          if (error) isValid = false;
          newErrors[element.name] = error;
        }
      }

      setErrors(newErrors);

      if (isValid) {
        props.onSubmit(e);
      }
    };

    return (
      <WrappedComponent
        {...props}
        errors={errors}
        touched={touched}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
      />
    );
  };
};

export default withValidation;
