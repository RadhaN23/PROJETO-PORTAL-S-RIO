import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {

const history = useHistory();

const handleLogin = () => { 
   console.log('Logging in...'); 
   // Add logic to redirect to Home page 
   history.push('/Home');
};

const handleSignUp = () => { 
   console.log('Signing up...'); 
   // Add logic to redirect to Sign Up page 
   history.push('/Cadastro');
};

return ( 
   <div> 
      <h1>Seja bem-vindo ao Portal do Paciente</h1> 
      <h2>Login</h2> 
      <h4>CPF/RNE:</h4> 
      <input></input> <br></br> <br></br> 
      <button onClick={handleLogin}>Entre</button> <br></br> 
      <button onClick={handleSignUp}>Cadastre-se</button> 
   </div> 
  ); 
}

export default Login;