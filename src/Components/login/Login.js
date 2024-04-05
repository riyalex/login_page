import React, {useState} from 'react';
import './Login.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Login = () => {

    const [action, setAction] = useState("Sign up");

  return (
    <div className='container'>
        <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
    </div>
        <div className='inputs'>
            <div className='input'>
                <img src={user_icon} alt=""/>
                <input type="text" placeholder="Name" />
            </div>
            <div className='input'>
                <img src={email_icon} alt=""/>
                <input type="email" placeholder="Email I'd" />
            </div>
            <div className='input'>
                <img src={password_icon} alt=""/>
                <input type="password" placeholder="Password" />
            </div>
        </div>
        <div className="forgot-password">Lost Password ?   <span>Click Here</span></div>
        <div className="submit-container">
        <div className={action==="Login"?"submit grey":"submit"} onClick={()=>{setAction("Sign up")}}>Sign Up</div>
        <div className={action==="Sign up"?"submit grey":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default Login