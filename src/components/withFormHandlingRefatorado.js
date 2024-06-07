



 import { useState } from 'react';

 

const FormHocTest = ()=>{
  const validateInput = (type, value) => {
    switch(type) {
      case 'text':
        return value.trim() !== '';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case 'number':
        return !isNaN(value) && value !== '';
      case 'password':
        return value.length >= 6;
      case 'tel':
        return /^[0-9]{10,15}$/.test(value);
      default:
        return true;
    }
  }
const todoArr = [...formData]
const [todos, setTodos] = useState([...formData])

const [formData, setFormData] = useState({
  username: 'eduardo',
  email: 'eduardo@gmail.com',
  age: '42',
  password: '234345',
  phone: '2343123245'
});

const [errors, setErrors] = useState({});

const handleChange = (e) => {
  const { name, value, type } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });

  if (!validateInput(type, value)) {
    setErrors({
      ...errors,
      [name]: `Invalid ${name}`
    });
  } else {
    const newErrors = { ...errors };
    delete newErrors[name];
    setErrors(newErrors);
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  const formIsValid = Object.keys(formData).every(key =>
    validateInput(e.target[key].type, formData[key])
  );

  if (formIsValid) {
    todoArr.push(formData)
    setTodos(formData)
    console.log('Form data:', todos);
    // Processar form data
  } else {
    console.log('Form has errors');
  }
};


return {
  handleSubmit,
  handleChange,
  formData, 
  errors,
  todos
}
 }


 export default FormHocTest;