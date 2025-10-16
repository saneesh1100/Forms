import { useState } from 'react';
import Input from './Input';
export default function Login() {

  const[enteredValues,setEnteredValues]=useState({
    email:'',
    password:''
  });

  const [isEDIT,setIsEDIT]=useState({email:false, password:false});

  const invalidEmailAddress = isEDIT.email && !enteredValues.email.includes('@');
  const invalidPassword = isEDIT.password && enteredValues.password.trim().length < 6;

    function handleSubmit(event) {
      event.preventDefault();     
  }


  function handleInputChange(identifier,value){    
      setEnteredValues(prevValues=> ({...prevValues,[identifier]:value}));
      setIsEDIT(prevState=>({...prevState,[identifier]:false}));
  }

  function handleInputBlur(identifier){
    setIsEDIT(prevState=>({...prevState,[identifier]:true}));
  }

  return (
    <form  onClick={handleSubmit}>
      <h2>Login</h2>
       <div className="control-row">
        <Input label="email" id="email" onBlur={()=> handleInputBlur('email')} name="email" value={enteredValues.email} onChange={(event)=>  handleInputChange('email',event.target.value)} error={invalidEmailAddress && 'please enter valid email address'}/>
        <Input label="password" id="password" type="password" onBlur={()=> handleInputBlur('password')} name="password" value={enteredValues.password} onChange={(event)=>  handleInputChange('password',event.target.value)} error={invalidPassword && 'please enter valid password'} />
        

       </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
