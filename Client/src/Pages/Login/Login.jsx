import './Login.css'
import { Context } from '../../Component/context/Context';
import {Link } from "react-router-dom"


const Login = () => {
  const userRef =  useRef();
  const passwordRef =  useREf()

  const { dispatch, isFetching } = useContext(Context)


    const handleSubmit = (e) => {
      e.preventDefault(); 


      // this is used to call the login_start written in context js
      // when button is clicked 'isFecthing' is set to true
      dispatch({})
    }
  return (
    <>
    
    <div class="wrapper">


            
                <div class="wrapper-div">
                    <div class="register--header">
                    <h3>Admin Login</h3>

                    </div>

            <form action="" onSubmit={handleSubmit}>
              {
                // <label> Username </label>
              }
                  <input 
                          type="text" 
                          class="input--register" 
                          placeholder="Email / Username" 

                          // refrence for username login 
                          ref={userRef}
                          />
                  {
                    // <label> Password </label>
                  }
                  <input 
                          type="text" 
                          class="input--register" 
                          placeholder="Password" 

                          // refrence for Password login 
                          ref={passwordRef}
                          />


                  <p 
                      class="forgot">
                      Forgot Password ?  
                  </p>
            </form>

            <div class="submit--div">
                    <button 
                              class="sign-btn"> 
                          <Link to="/admin-page" 
                                className='link'>
                                  Sign In
                            </Link>
                    </button>
                      { // <span> This page is only for admin</span> 
                      }
            </div>

 
        </div>


    </div>

    </>

  )
}

export default Login