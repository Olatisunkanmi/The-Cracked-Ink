import {CreativeWrite, Post, About, Login, Tech} from './Component/Index'
import { BrowserRouter, Routes, Route, } from "react-router-dom";


function App() {
  const user =  false;

  return (
   
    <BrowserRouter >   
        <Routes> 
        <Route exact path='/' element={<About />} />
        <Route  path='/posts/' element={<CreativeWrite />} /> 
        <Route  path='/posts/:Id' element={<Post />} /> 
        {
          //  <Route  path='/posts/:Id' element={<Edit />} /> 
        }
       

        <Route  path='/admin-login' element={<Login />} /> 

       </Routes>
    </BrowserRouter>

 

 



  );
}

export default App;
