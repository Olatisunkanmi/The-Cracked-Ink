import './Login.css'
import { useRef , useContext} from 'react';
import { Context } from '../../Component/context/Context';
import {Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { SinglePost } from '../../Component/Index';


const Login = () => {
  let navigate =  useNavigate()

  const userRef =  useRef();
  const passwordRef =  useRef(); 
  const { dispatch, isFetching, user } = useContext(Context);


    const handleSubmit =  async (e) => {
      e.preventDefault(); 


      // this is used to call the login_start written in context js
      // when button is clicked 'isFecthing' is set to true
      // then  login process can begin 
               dispatch({type : "LOGIN_START"});
              
              try {             
                  const res = await axios.post('/auth/login',  {
                   
                    username : userRef.current.value,
                    password : passwordRef.current.value,
                  }) 
                    
                  // payload ?
                  // payload is 'User' in reducer: check : 👀
                  //  from here res.data is set as 'user'
             dispatch({type : "LOGIN_SUCCESS", payload: res.data });
                  
              // navigate( './posts', {replace : true})
             console.log('Login Success')
              } catch (error) {
                dispatch({type : "LOGIN_FAILURE" });
                  console.log('Login Failed ');
              }
    }

    console.log(user);
  return (
    <>
    
    <div class="wrapper">
  

            
                <div class="wrapper-div">
                    <div class="register--header">
                    <h3>Admin Login</h3>

                    </div>
                   
                <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                  type="text"
                  className="loginInput"
                  placeholder="Enter your username..."
                  ref={userRef}
                />

                <label>Password</label>
                <input
                  type="password"
                  className="loginInput"
                  placeholder="Enter your password..."
                  ref={passwordRef}
                />

                <button 
                className="login--btn" 
                type="submit" 
                disabled={isFetching}>
                  Login
                </button>
              </form>
           

 
        </div>


    </div>

    </>

  )
}

export default Login