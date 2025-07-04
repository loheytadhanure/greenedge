import React from 'react';
import './Header.css';

type HeaderProps = {
  isLoggedIn: boolean;
  onLogout: () => void;
  onLoginClick: () => void;   // add optional callbacks for buttons
  onSignUpClick: () => void;
};

const Header: React.FC<HeaderProps> = ({
  isLoggedIn,
  onLogout,
  onLoginClick,
  onSignUpClick,
}) => (
  <header className="header">
    <div className="header-left">
      <h1>GreenEdge</h1>
    </div>
    <div className="header-right">
      {isLoggedIn ? (
        <div className="profile-section">
          <img
            src="/assets/profile-placeholder.png"
            alt="Profile"
            className="profile-pic"
          />
          <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <div className="header-buttons">
          <button className="login-btn" onClick={onLoginClick}>Login</button>
          <button className="signup-btn" onClick={onSignUpClick}>Sign Up</button>
        </div>
      )}
    </div>
  </header>
);

export default Header;
