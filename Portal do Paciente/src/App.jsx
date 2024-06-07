import React from 'react';
import Login from "./Components/Login";
import { BrowserRouter,Route, Routes } from 'react-router-dom';



function App(){
return ( 
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}>
        <Route path='/Home' element={<Home/>}></Route>
        
        


        </Route>
      </Routes>
  
  </BrowserRouter>


)

}
export default App;