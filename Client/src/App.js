import {CreativeWrite, Post, About, Login, Edit, NotFound, Write, EachPosts} from './Component/Index'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Context } from './Component/context/Context';
import RequireAuth from './Hooks/RequireAuth';
import { useContext } from 'react'




function App() {
  const {user} =  useContext(Context);
 
    

  return (
   
    <BrowserRouter >   
        <Routes> 
            <Route  path='*' element={<NotFound />} /> 

            <Route exact path='/' element={<About />} />  
            <Route  path='/home/' element={<CreativeWrite />} /> 
            <Route  path='/posts/' element={<EachPosts />} /> 
            <Route  path='/posts/:Id' element={<Post />} />
            <Route  path='/admin-login' element={<Login />} /> 
            <Route  element = { <RequireAuth  />}>
                   <Route  path='/admin-login/edit' element={<Edit />} />
                   <Route  path='/admin-login/edit/:Id' element={<Write />} />
                   <Route  path='/admin-login/edit/adminwrite' element={<Write />}
          /> 
            </Route>
        

       </Routes>
    </BrowserRouter>

 

 



  );
}

export default App;
