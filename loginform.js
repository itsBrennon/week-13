import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './loginform.css';



const LoginForm = () => {

  const [popupStyle, showPopup] = useState("hide")

  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }
  
    return (
      <body>
        <form class="page d-flex justify-content-center align-items-center">
          <div class="cover">
            <h3>Sign In</h3>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn" onClick={popup}>Login</div>
            <p className="text">Or login using</p>

            <div className="alt-login">
            <div className="facebook"></div>
            <div className="google"></div>
            </div>

            <div className={popupStyle}>
            <h3>Login Failed</h3>
            <p>Username or password incorrect</p>
            </div>
      
          

          </div>
        </form>
      </body>
    )
  }



export default LoginForm;

