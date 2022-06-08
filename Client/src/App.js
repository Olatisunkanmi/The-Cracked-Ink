import {CreativeWrite, Post, About, Login, Tech} from './Component/Index'
import { BrowserRouter, Routes, Route, } from "react-router-dom";


function App() {


  return (
   
    <BrowserRouter >   
        <Routes> 
        <Route exact path='/' element={<About />} />
        <Route  path='/posts/' element={<CreativeWrite />} /> 
        <Route  path='/posts/:Id' element={<Post />} /> 

  
        <Route  path='/login' element={<Login />} /> 

       </Routes>
    </BrowserRouter>

 

 



  );
}

export default App;
