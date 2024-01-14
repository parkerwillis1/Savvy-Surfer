import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file for styling

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <p>© 2024 Savvy Surfer. All rights reserved.</p>
                <p>Contact us: info@savvysurfer.com</p>
                {/* Add additional footer content here */}
            </div>
            <div className="footer-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
                {/* Add more links as needed */}
            </div>
        </footer>
    );
};

export default Footer;
