import './Login.css'
import {Link } from "react-router-dom"


const Login = () => {
  return (
    <>
    
    <div class="wrapper">


            
                <div class="wrapper-div">
                    <div class="register--header">
                    <h3>Admin Login</h3>

                    </div>

            <form action="">
              {
                // <label> Username </label>
              }
                  <input type="text" class="input--register" placeholder="Email / Username" />
                  {
                    // <label> Password </label>
                  }
                  <input type="text" class="input--register" placeholder="Password" />
                  <p class="forgot">Forgot Password ?</p>
            </form>

            <div class="submit--div">
            <button class="sign-btn"> 
                  <Link to="/admin-page" className='link'>
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