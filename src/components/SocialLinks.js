import React from 'react';
import '../styles/SocialLinks.css'; // Make sure to create this CSS file
import { ReactComponent as FacebookIcon } from '../assets/facebook.svg'; // Ensure you have this SVG in your assets
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg'; // Ensure you have this SVG in your assets
import { ReactComponent as WhatsAppIcon } from '../assets/whatsapp.svg'; // Ensure you have this SVG in your assets

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FacebookIcon />
      </a>
      <a href="https://www.instagram.com/YourPage" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <InstagramIcon />
      </a>
      <a href="https://wa.me/YourWhatsAppNumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <WhatsAppIcon />
      </a>
      {/* Add more links as needed */}
    </div>
  );
}

export default SocialLinks;
