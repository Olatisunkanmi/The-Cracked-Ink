import {CreativeWrite, Post, About, Login, Edit} from './Component/Index'
import { BrowserRouter, Routes, Route,  useNavigate} from "react-router-dom";
import { Context } from './Component/context/Context';
import { useContext  } from 'react'
function App() {
  const {user} =  useContext(Context);
      
  return (
   
    <BrowserRouter >   
        <Routes> 
        <Route exact path='/' element={<About />} />
        <Route  path='/posts/' element={<CreativeWrite />} /> 
        <Route  path='/posts/:Id' element={<Post />} />
        <Route  path='/admin-login' element={<Login />} /> 
     

       </Routes>
    </BrowserRouter>

 

 



  );
}

export default App;
