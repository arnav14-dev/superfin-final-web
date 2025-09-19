import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Download
} from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../data/products';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      // If on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If on other pages, navigate to homepage and then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'GR8 Series', path: '/', section: 'products' },
        { name: 'Classic Series', path: '/', section: 'products' },
        { name: 'Fix Series', path: '/', section: 'products' },
        { name: 'Uniq Series', path: '/', section: 'products' },
        { name: 'Nano Series', path: '/', section: 'products' },
        { name: 'Nova Series', path: '/', section: 'products' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/', section: 'about' },
        { name: 'Features', path: '/', section: 'features' },
        { name: 'Products', path: '/', section: 'products' },
        { name: 'Testimonials', path: '/', section: 'testimonials' },
        { name: 'Contact Us', path: '/', section: 'contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Facebook', href: companyInfo.social.facebook, isSocial: true, icon: Facebook },
        { name: 'Instagram', href: companyInfo.social.instagram, isSocial: true, icon: Instagram },
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: companyInfo.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: companyInfo.social.instagram, label: 'Instagram' },
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-company">
            <div onClick={()=>scrollToSection('home')} className="footer-logo">
            </div>
            <p className="footer-description">
              {companyInfo.description}
            </p>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span>{companyInfo.contact.phone}</span>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <span>{companyInfo.contact.email}</span>
              </div>
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>
                  {companyInfo.address.street}, {companyInfo.address.city}<br />
                  {companyInfo.address.state} {companyInfo.address.pincode}
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="footer-links">
              <h3 className="footer-links-title">
                {section.title}
              </h3>
              <ul className="footer-links-list">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.section ? (
                      <button
                        onClick={() => scrollToSection(link.section)}
                        className="footer-link"
                      >
                        {link.name}
                      </button>
                    ) : link.isSocial ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link footer-social-link-item"
                      >
                        {link.icon && <link.icon className="w-4 h-4" />}
                        <span>{link.name}</span>
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="footer-link"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            
            
            <div className="footer-copyright">
                <Link to="/privacy" className="footer-legal-link">
                  Privacy Policy
                </Link>
              <span>© {currentYear} SuperFin Electric Switches. All rights reserved.</span>
              <div className="footer-legal">
                <Link to="/terms" className="footer-legal-link">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
