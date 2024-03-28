// SignInModal.js
import React from 'react';
import './SignInModal.css'; // Ensure the CSS file is correctly linked

const SignInModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2 className="modal-title">Sign In</h2>
        <form className="modal-form">
          <input
            type="email"
            placeholder="Email"
            className="modal-input" // Added class for styling
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="modal-input" // Added class for styling
            required
          />
          <button type="submit" className="modal-submit-btn">Sign In</button> {/* Updated class name */}
        </form>
        <button onClick={onClose} className="modal-close-btn">Close</button> {/* Updated class name */}
      </div>
    </div>
  );
};

export default SignInModal;
