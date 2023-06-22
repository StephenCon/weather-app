// Import necessary libraries
import React from "react";
import './Footer.css'; // Importing Footer.css for styling

// Footer Component
const Footer = () => {
    // get current year
    const year = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <p>&copy; {year} Your Company Name. All rights reserved.</p>
        </footer>
    );
};

// Export Footer Component
export default Footer;
