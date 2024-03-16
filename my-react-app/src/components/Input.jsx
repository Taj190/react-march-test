import React, { useState } from 'react';
import './input.css';
const Input = () => {
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [passwordLengthValid, setPasswordLengthValid] = useState(false);
    function handleSubmission(e) {
        e.preventDefault();
        if (validEmail && passwordsMatch && passwordLengthValid) {
            
            alert('Form submitted successfully!');
        } else {
            alert('Invalid email or password mismatch. Cannot submit form.');
        }
    }

    function isValidEmail(event) {
        const inputEmail = event.target.value;
        setEmail(inputEmail); // Update email state
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = regex.test(inputEmail);
        setValidEmail(isValid);
    }

    function handlePasswordChange(event) {
        const newPassword =  event.target.value ;
        setPassword(newPassword) ;
        setPasswordLengthValid(newPassword.length===8);

    }
    function handleConfirmPasswordChange(event) {
        const newConfirmPassword = event.target.value;
        setConfirmPassword(newConfirmPassword);
       
        setPasswordsMatch(newConfirmPassword === password);
    }
    return (
        <React.Fragment>
            <form className="form" onSubmit={handleSubmission}>
                <div className='email'>
                <input type="email" onChange={isValidEmail} placeholder='enter email' />
                {!validEmail && <p style={{ color: 'red' }}>Invalid email format</p>}
                </div>
                <div className="password">
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                {!passwordLengthValid && <p style={{ color: 'red' }}>Password must be 8 characters long</p>}
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match</p>}
                <button type="submit">Submit</button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default Input;
