import { useEffect, useState } from 'react';
import './loginform.css';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        

        const data = await response.json();
        if (response.ok) {
            console.log('User successfully logged in:', data);
        } else {
            console.error('Failed to log in:', data);
        }
    };

    useEffect(() => {
        
    }, []);

    return (
        <div className="login">
            <div className="container">
                <span className="header">
                <img src="/assets/ui.jpeg" alt=""/>
                <span className='content'>
                <h1>Work Load</h1>
                <p>Project Management Admin</p>
                </span>
                </span>
                <p className='title'>Sign in your account</p>
                <form onSubmit={submitForm}>
                   <span className='label-container'>
                    <label className='label'>Email
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    </span>
                    <span className='label-container'>
                    <label className='label'>Password
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    </span>
                    <span className='label-container'>
                        <span className='remember'><input type="checkbox" id="remember" name="remember" /><label for="remember">Remember me</label></span></span>
                        <span className='label-container'><span className='forgot'><a href="#">Forgot Password?</a></span></span>
                    <button type="submit">Sign Me In</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
