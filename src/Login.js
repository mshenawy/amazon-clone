import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, Password)
            .then((auth) => {
                // it successfully created a new user with this mail and password
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));


        // firebase login here 

    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, Password)
            .then((auth) => {
                // it successfully created a new user with this mail and password
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));

    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={Password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
