import { useState } from 'react';

const useFormValidacao = ()=>{
    
const [formData, setFormData] = useState({ username: 'eduardo',
email: 'eduardo@gmail.com',
age: '42',
password: '234345',
phone: '2343123245'})


const arrayDados = [].splice();

 
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
      const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      
        if (!validateInput(type, value)) {
         return false
        }
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        const formIsValid = Object.keys(formData).every(key =>
          validateInput(e.target[key].type, formData[key])
        );
      
        if (formIsValid) {
          console.log('Form data:', formData);
          arrayDados.push(formData)
          console.log(arrayDados);
          // Processar form data
        } else {
          console.log('Form has errors');
        }
      };




    return {
        handleChange,
        handleSubmit,
        formData

    }
}


export default useFormValidacao;