import React, { useState } from 'react';

const SignUpForm = () => {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for input validation
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  // Function to handle email input change
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Simple email validation
    setEmailValid(/^\S+@\S+\.\S+$/.test(newEmail));
  };

  // Function to handle password input change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Simple password validation
    setPasswordValid(newPassword.length >= 8);
  };

  // Function to handle confirm password input change
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    // Simple confirm password validation
    setConfirmPasswordValid(newConfirmPassword === password);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else{
      alert('Can’t submit the form. Please check your inputs.');
    }
  };

  return (
    <div className='form'>
      <div className='form1'>
        <label>Email:</label><br/>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ border: emailValid ? '2px solid green' : '2px solid red' }}
        />
        {!emailValid && <p>Error: Please enter a valid email address.</p>}
      </div>
      <div className='form1'>
        <label>Password:</label><br/>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ border: passwordValid ? '2px solid green' : '2px solid red' }}
        />
        {!passwordValid && <p>Error: Password must be at least 8 characters long.</p>}
      </div>
      <div className='form1'>
        <label>Confirm Password:</label><br/>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{
            border: confirmPasswordValid ? '2px solid green' : '2px solid red',
          }}
        />
        {!confirmPasswordValid && (
          <p>Error: Confirm password must match the entered password.</p>
        )}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignUpForm;
