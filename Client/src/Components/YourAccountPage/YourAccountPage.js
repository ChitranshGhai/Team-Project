import React, { useState, useEffect } from 'react';
import './YourAccountPage.css';

const AccountDetails = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user details from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="account-container">
      <div className="content">
        <h2>Personal information</h2>
        {user ? (
          <>
            <p>
              Manage your personal information, including phone numbers and email addresses where you can be contacted.
            </p>

            <div className="info-grid">
              <div className="info-box">
                <span className="info-label">Name</span>
                <span className="info-value">{user.name}</span>
              </div>
              <div className="info-box">
                <span className="info-label">Country Region</span>
                <span className="info-value">{user.country || 'India'}</span>
              </div>
              <div className="info-box">
                <span className="info-label">Language</span>
                <span className="info-value">{user.language || 'English'}</span>
              </div>
              <div className="info-box">
                <span className="info-label">Email</span>
                <span className="info-value">{user.email}</span>
              </div>
            </div>
          </>
        ) : (
          <p>Please log in to view your details.</p>
        )}
      </div>
    </div>
  );
};

export default AccountDetails;
