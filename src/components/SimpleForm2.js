import React,{useState} from 'react';
import './form2.css'
const Form2 = ({  errors, onAdd}) => {


  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ email, name, password, timestamp: Date.now()});
    setEmail('');
    setName('');
    setPassword('');
  };
  return (
    <form onSubmit={handleSubmit}>      
      <div>
        <label className='custom_input'>
          Email   
          <input className='input' placeholder='Digite seu email'  type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label className='custom_input'>
          Name
          <input className='input' placeholder='Digite seu nome' type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label className='custom_input'>
          Password
          <input className='input' placeholder='Digite sua senha' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button className='testbutton' type="submit" >Submit</button>
    </form>
  );
};

export default Form2;


///////////////////////////////////

