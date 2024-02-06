import React from 'react'
import LoginNavbar from './LoginNavbar'
import '../login_css/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Login() {

    return (
        <>
            <div className="mainLogin">
                <LoginNavbar />
            </div>
        </>
    )
}

export default Login