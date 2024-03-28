import React, { useState } from 'react';
import './SignInModal.css'; // Ensure the CSS file is correctly linked

const SignInModal = ({ isVisible, onClose }) => {
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState(''); // Changed variable name for clarity
  const [password, setPassword] = useState(''); // Changed variable name for clarity

  const handleClose = () => {
    setUserType(''); // Reset userType when closing the modal
    setEmail(''); // Optionally reset form fields
    setPassword(''); // Optionally reset form fields
    onClose(); // Call the passed onClose prop
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userType, email, password });
    // Implement your sign-in logic here based on userType
    handleClose(); // Use handleClose to reset state and close modal
  };

  if (!isVisible) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button onClick={handleClose} className="close-button">×</button>
        {userType === '' && (
          <div className="user-type-selection">
            <h2>Select User Type</h2>
            <button onClick={() => setUserType('employee')}>Employee</button>
            <button onClick={() => setUserType('customer')}>Customer</button>
          </div>
        )}
        {userType !== '' && (
          <>
            <h2>Sign In as {userType.charAt(0).toUpperCase() + userType.slice(1)}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="input-field"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="input-field"
              />
              <button type="submit" className="submit-button">Sign In</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SignInModal;
