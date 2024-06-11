// import React,{useState} from 'react';
// import Tabela from  '../components/tabela'
// import Spinner from '../components/spinner/spinner'

//  export default function withFormHandling(WrappedComponent) {
//   return function  () {
//     const [estado, setEstado]= useState(
//       { usuario:'eduardo', email:'eduardo@gmail.com', cpf:'222.444.555-12' , prof:'', fram: '', skills:[] } )
   

//     const [listaCand, setListCandidatos] = useState([])
    
//     const handleInputChange = (e)=>{
//      changerField(e.target.name, e.target.value)
//     }
//  function changerField(field, value){
//      setEstado({...estado, [field]:value})
//     }
//     const handleRadioChange = (event) => {
     
//       const { value} = event.target;
//      setEstado( {...estado, fram: value}) 
//      }
//    const  handleCheckChange = (event) => {
    
//       const { value} = event.target;
  
//      setEstado( {...estado, skills:value}) 
//      }

  
  
 
//     const handleSubmit = (e) => {
//       e.preventDefault()
//       const { usuario, email, cpf ,prof} = estado;
//       const regEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/i;
//       const regCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    
//       if (usuario === "" ) {
//         setEstado( {errors:{usuario:"Por favor, preencha o campo de usuário!"} });
//         return false
//       }
//       if ( prof === "" ) {
//         setEstado({ errors:{prof:"Por favor, preencha sua profissão"} });
      
//         return false
//       }
    
//       if(!regEmail.test(email)){
//         setEstado({ errors:{email:"Por favor, preencha o campo de email corretamente!"} });
//           return false

//       }
//       if(!regCpf.test(cpf)){
//         setEstado({ errors:{cpf:"Por favor, preencha o campo de cpf corretamente!"} });
//           return false
//       }

//       console.log("sai form")
//       setListCandidatos(... [estado])
//       setEstado({ ok : "enviado com sucesso!" })
//       setTimeout(() => {
//         setEstado({ ok :false})
//         console.log("volta form")
        
        
//       }, 2000);
      
      
      
//       return
      
      
      
//     }
    

//       return (
//         <>
//         {!estado.ok &&
// <>
//           <WrappedComponent
//           // {...props}
//           dados={estado}
//           handleInputChange={handleInputChange}
//           handleSubmit={handleSubmit}
//           onRadio={handleRadioChange}
//           onCheck={handleCheckChange} />
       
//         <Tabela lista={listaCand}/>
//         </> ||
//          <Spinner/>

// }
// </>
//       );
    
//   };
//  }



 import { useState } from 'react';

const useForm = (initialState, validar) => {


  const listaCand = [];


  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setValues({
      ...values,
      [name]: newValue
    });
    
    setTouched({
      ...touched,
      [name]: true
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    
    setTouched({
      ...touched,
      [name]: true
    });
    
    if (validar) {
      setErrors({
        ...errors,
        [name]: validar[name] && validar[name](values[name])
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validar) {
      const newErrors = Object.keys(values).reduce((acc, key) => {
        const error = validar[key] && validar[key](values[key]);
        if (error) {
          acc[key] = error;
        }
        return acc;
      }, {});

      setErrors(newErrors);

      if (Object.keys(newErrors).length > 0) {
        return;
      }
    }
    
    listaCand.splice(values)
    console.log('Form submitted OK');
    console.log(listaCand);
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit, 
   
  };
};

export default useForm;