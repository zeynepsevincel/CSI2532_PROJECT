import React, { useState } from 'react';
import './JoinUs.css'; // Make sure to create a corresponding CSS file

const JoinUs = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [ssn, setSsn] = useState('');
  const [email, setEmail] = useState(''); // Added state for email
  const [password, setPassword] = useState(''); // Added state for password
  const [registrationDate] = useState(new Date().toISOString().split('T')[0]); // Automatically set to today's date

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle form submission, such as sending data to your backend
    const clientData = {
      fullName,
      address,
      ssn,
      email, // Including email in the submission data
      password, // Including password in the submission data
      registrationDate,
    };
    console.log(clientData);
    // After form submission logic
  };

  return (
    <div className="join-us-container">
      <h1>Join Us</h1>
      <form onSubmit={handleSubmit} className="join-us-form">
        <div className="form-group">
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ssn">Social Security Number / NAS</label>
          <input
            type="text"
            id="ssn"
            value={ssn}
            onChange={(e) => setSsn(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Registration date is not visible to the user but is submitted with the form */}
        <input
          type="hidden"
          id="registration-date"
          value={registrationDate}
        />
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default JoinUs;
