// Navbar.jsx
// Navbar.jsx
import React from 'react';
import navlogo from '../../assets/nav-logo.svg'; // Adjust the path and filename as per your project structure
import navprofile from '../../assets/nav-profile.svg'; // Adjust the path and filename as per your project structure

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={navlogo} alt="Navigation Logo" className="nav-logo" />
            <img src={navprofile} alt="Navigation Profile" className="nav-profile" />
            {/* Other content */}
        </div>
    );
};

export default Navbar;
