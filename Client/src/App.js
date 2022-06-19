import {CreativeWrite, Post, About, Login, Edit, NotFound} from './Component/Index'
import { BrowserRouter, Routes, Route,  useNavigate} from "react-router-dom";
import { Context } from './Component/context/Context';
import RequireAuth from './Hooks/RequireAuth';
import { useContext  } from 'react'
function App() {
  const {user} =  useContext(Context);
      
  return (
   
    <BrowserRouter >   
        <Routes> 
            <Route  path='*' element={<NotFound />} /> 

            <Route exact path='/' element={<About />} />  
            <Route  path='/posts/' element={<CreativeWrite />} /> 
            <Route  path='/posts/:Id' element={<Post />} />
            <Route  path='/admin-login' element={<Login />} /> 

            <Route 
            element = { <RequireAuth />}
                   >
           
            <Route  path='/admin-login/edit' element={<Edit />} /> 
            </Route>
            
        

       </Routes>
    </BrowserRouter>

 

 



  );
}

export default App;
