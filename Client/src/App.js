import {Home, Post, About, Login} from './Component/Index'
import { BrowserRouter, Routes, Route, } from "react-router-dom";



function App() {

  return (


   
    <BrowserRouter >   
        <Routes> 
        <Route exact path='/' element={<About />} />
        <Route  path='/write' element={<Home />} /> 
        <Route  path='/write/:postId' element={<Post />} /> 
        <Route  path='/login' element={<Login />} /> 

       </Routes>
    </BrowserRouter>

 

 



  );
}

export default App;
