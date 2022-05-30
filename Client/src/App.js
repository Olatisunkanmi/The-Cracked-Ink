import {Write, Post, About, Login, Tech} from './Component/Index'
import { BrowserRouter, Routes, Route, } from "react-router-dom";



function App() {

  return (


   
    <BrowserRouter >   
        <Routes> 
        <Route exact path='/' element={<About />} />
        <Route  path='/write' element={<Write />} /> 
        <Route  path='/write/:postId' element={<Post />} /> 
        <Route  path='/tech' element={<Tech />} /> 
        <Route  path='/tech/:techId' element={<Post />} /> 

        <Route  path='/login' element={<Login />} /> 

       </Routes>
    </BrowserRouter>

 

 



  );
}

export default App;
