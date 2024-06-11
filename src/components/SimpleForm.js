// import React from 'react';

// function SimpleForm (props){

//     const {dados, handleInputChange, handleSubmit, onCheck, onRadio} = props;
   
//     return (
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Nome:</label>
//           <input 
//             type="text"
//             id="name"
//             name="usuario" 
//             value={dados.usuario}
//             onChange={handleInputChange}
       
//           />
//           {dados.errors && <p>{dados.errors.usuario}</p>}
//               <div>
//           <label htmlFor="email">E-mail:</label>
//           <input

//             type="text"
//             id="email"
//             name="email"
//             placeholder='exemplo@gmail.com'
//             value={dados.email || ''}
//             onChange={handleInputChange}
//           />
//      {dados.errors && <p>{dados.errors.email}</p>}
//         </div>
//         <div>
//                   <label htmlFor="cpf">CPF:</label>
//                   <input
//                     type="text"
//                     id="cpf"
//                     name="cpf"
//                     placeholder='000.000.000-00'
//                     value={dados.cpf}
//                     onChange={handleInputChange}
                  
//                   />
//                    {dados.errors && <p>{dados.errors.cpf}</p>}
//                 </div>
  
//         <div>
//                   <label htmlFor="cpf">Escolha um framework favorito:</label>
//                  <br/>
//               <input type="radio" id="react" name="fav_framework" value="REACT"  onChange={onRadio} /> 
//                 <label for="react ">REACT</label><br/>
//                <input type="radio" id="vue" name="fav_framework" value="VUE"  onChange={onRadio} />
//                <label for="vue">VUE</label><br/>
//                  <input type="radio" id="angular" name="fav_framework" value="ANGULAR"  onChange={onRadio} />
//                  <label for="angular">ANGULAR</label>


//                 </div>
//                <div>
//                   <label htmlFor="check">Experiência em:</label>
//                   <input type="checkbox" id="vehicle1" name="vehicle1" value="JavaScript"
//                   onChange={onCheck}/>
//                   <label for="vehicle1">JavaScript</label>
//                   <input type="checkbox" id="vehicle2" name="vehicle2" value="Node.js" onChange={onCheck}/>
//                   <label for="vehicle2"> Node.js</label>
//                   <input type="checkbox" id="vehicle3" name="vehicle3" value="GiteGitHub" onChange={onCheck}/>
//                   <label for="vehicle3">  Git e GitHub</label>
//                   <input type="checkbox" id="vehicle4" name="vehicle4" value="Tailwind" onChange={onCheck}/>
//                   <label for="vehicle4">  Tailwind</label>
                  
                 
//                 </div>
  
//               <div>
//                   <label htmlFor="profissao">Qual sua profissão:</label>
//                   <select name='prof' id='select-prof' onChange={handleInputChange}>
//                     <option  >Desenvolvedor Ops</option>
//                     <option  >Desenvolvedor Back-end</option>
//                     <option  >Desenvolvedor Full Stack</option>
//                     <option   >Desenvolvedor Front-end</option>
//                     <option  >Desenvolvedor Mobile</option>
//                   </select>
//                   {dados.errors && <p>{dados.errors.prof}</p>}
//                 </div>
            
               
//         </div>
//         <button type="submit" >Enviar</button>
//         {dados.ok && <p>{dados.ok}</p>}
 
       
//       <div>
         
//       </div>
//       </form>
//     );
  
// }

// export default SimpleForm;

// ,{useState, useEffect} 
import React from 'react';
import useForm from './withFormHandlingRefatorado';
import Tabela from './tabela'

const FormComponent = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit} = useForm(
    {
      username: '',
      email: '',
      password: '',
      acceptTerms: false,
      gender: 'masculino'
    },
    {
      username: (value) => (value.trim() === '' ? 'Username is required' : null),
      email: (value) => (!/^\S+@\S+\.\S+$/.test(value) ? 'Invalid email address' : null),
      password: (value) => (value.length < 6 ? 'Password must be at least 6 characters long' : null),
      acceptTerms: (value) => (!value ? 'You must accept the terms' : null)
    }
  );
  // const [listaC, setListaC] = useState([])
  // useEffect(()=>{
  //   listaC
  // },[])

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
      {touched.username && errors.username && <span>{errors.username}</span>}

      <input type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
      {touched.email && errors.email && <span>{errors.email}</span>}

      <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
      {touched.password && errors.password && <span>{errors.password}</span>}

      <input type="checkbox" name="acceptTerms" checked={values.acceptTerms} onChange={handleChange} onBlur={handleBlur} />
      Accept terms
      {touched.acceptTerms && errors.acceptTerms && <span>{errors.acceptTerms}</span>}

      <input type="radio" name="gender" value="masculino" checked={values.gender === 'masculino'} onChange={handleChange} onBlur={handleBlur} />
      masculino
      <input type="radio" name="gender" value="feminino" checked={values.gender === 'feminino'} onChange={handleChange} onBlur={handleBlur} />
      feminino

      <button type="submit">Submit</button>
    </form>
    <Tabela  lista={[values]}/>
    </>
  );
};

export default FormComponent;