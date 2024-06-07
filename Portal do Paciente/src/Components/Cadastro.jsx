import React from "react";
import { Link } from 'react-router-dom'

function Cadastro(){

   
    return (
        <div>      

<h1>Cadastro</h1>


<h4>Nome Completo</h4>
<input></input>
<h4>Data de Nascimento</h4>
  <input type="date" id="dataNascimento" name="dataNascimento" max="2024-12-31" required></input>
<h4>CPF/RNE:</h4>
<input></input>
<br></br>
<br></br>
<button>Enviar</button>
       
        </div>
    )

}

export default Cadastro;