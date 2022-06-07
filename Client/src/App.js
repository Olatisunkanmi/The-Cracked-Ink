import {Write, Post, About, Login, Tech} from './Component/Index'
import { BrowserRouter, Routes, Route, } from "react-router-dom";


function App() {


  return (
   
    <BrowserRouter >   
        <Routes> 
        <Route exact path='/' element={<About />} />
        <Route  path='/posts/' element={<Write />} /> 
        <Route  path='/posts/:Id' element={<Post />} /> 
        <Route  path='/edit' element={<Write />} /> 
  
        <Route  path='/login' element={<Login />} /> 

       </Routes>
    </BrowserRouter>

 

 



  );
}

export default App;
