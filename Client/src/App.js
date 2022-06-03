import {Write, Post, About, Login, Tech} from './Component/Index'
import { BrowserRouter, Routes, Route, } from "react-router-dom";



function App() {

  return (

   
    <BrowserRouter >   
        <Routes> 
        <Route exact path='/' element={<About />} />
        <Route  path='/creative-texts' element={<Write />} /> 
        <Route  path='/creative-texts/:postId' element={<Post />} /> 
        <Route  path='/tech-articles' element={<Tech />} /> 
        <Route  path='/tech-articles/:postId' element={<Post />} /> 
        <Route  path='/edit' element={<Login />} /> 
        <Route  path='/login' element={<Login />} /> 

       </Routes>
    </BrowserRouter>

 

 



  );
}

export default App;
