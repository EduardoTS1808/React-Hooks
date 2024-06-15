import React,{useState} from 'react';
import './form1.css'

const Form1 = ({onAdd,  errors}) => {


  const [inputValue, setInputValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [radioValue, setRadioValue] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ inputValue, checkboxValue, selectValue, radioValue,   timestamp: Date.now() });
    setInputValue('');
    setCheckboxValue(false);
    setSelectValue('');
    setRadioValue('');

  };

  return (
    <form  className="formulario" onSubmit={handleSubmit}>
      <div  className='campo-input'>
        <label  className="cr-wrapper" >
          Nome:
          <input className='input'  placeholder='Digite seu nome' type="text" name="inputField" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </label>
        {errors.inputField && <span>{errors.inputField}</span>}
      </div>
      <div className='campo-input'>
        <label  class="cr-wrapper"> 
         Brazileiro: <input type="checkbox" name="checkboxField" checked={checkboxValue} onChange={(e) => setCheckboxValue(e.target.checked)}  />
        </label>
        {errors.checkboxField && <span>{errors.checkboxField}</span>}
      </div>
      <div  className='campo-input'>
        <label>
        Selecione sua escolaridade:
          <select name="selectField"  
          value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
            <option value=""></option>
            <option value="Médio Completo">Médio Completo</option>
            <option value="Superior">Superior</option>
          </select>
        </label>
        {errors.selectField && <span>{errors.selectField}</span>}
      </div>
      <div  className='campo-input'>
        <label className='cr-wrapper'>
        Horário para trabalho:
          <input type="radio" name="radioField" value="diurno" checked={radioValue === 'diurno'} onChange={(e) => setRadioValue(e.target.value)} />
            Diurno
          <input type="radio" name="radioField" value="noturno" checked={radioValue === 'noturno'} onChange={(e) => setRadioValue(e.target.value)} />
          Noturno
        </label>
        {errors.radioField && <span>{errors.radioField}</span>}
      </div>
      <button  className='testbutton'  type="submit">Submit</button>
    </form>
  );
};

export default Form1;

///////////////////////////////////




