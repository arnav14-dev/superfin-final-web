import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/', section: 'home' },
    { name: 'Features', path: '/features', section: 'features' },
    { name: 'Products', path: '/', section: 'products' },
    { name: 'Testimonials', path: '/testimonials', section: 'testimonials' },
    { name: 'About Us', path: '/about', section: 'about' },
    { name: 'Contact', path: '/contact', section: 'contact' },
    { name: 'FAQ', path: '/faq'}
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    // If not on homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            const offset = 70; // Account for fixed navbar
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 100);
    } else {
      // Already on homepage, scroll directly
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 70; // Account for fixed navbar
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    }
    setIsOpen(false); // Close mobile menu
  };

  // Reset active section when location changes
  useEffect(() => {
    if (location.pathname === '/') {
      // Reset to home when on homepage
      setActiveSection('home');
    } else {
      // Clear active section when on other pages
      setActiveSection(null);
    }
  }, [location.pathname]);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      // Only run scroll detection on homepage
      if (location.pathname !== '/') return;
      
      const sections = ['home', 'features', 'products', 'testimonials', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const isActive = (path, section) => {
    if (location.pathname === '/' && section) {
      return activeSection === section;
    }
    if (path === '/') {
      return location.pathname === '/' && activeSection === 'home';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar"
    >
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div onClick={()=>scrollToSection('home')} className="logo-image">
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-desktop">
            {navItems.map((item) => (
              <div key={item.name} className="navbar-item">
                {item.hasDropdown ? (
                  <div>
                    <button
                      className={`navbar-link ${
                        isActive(item.path, item.section) 
                          ? 'navbar-link-active' 
                          : 'navbar-link-inactive'
                      }`}
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      {item.name}
                      {/* <ChevronDown className="w-4 h-4 ml-1 inline" /> */}
                    </button>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="navbar-dropdown"
                        onMouseEnter={() => setIsProductsOpen(true)}
                        onMouseLeave={() => setIsProductsOpen(false)}
                      >
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="dropdown-item"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`navbar-link ${
                      isActive(item.path, item.section) 
                        ? 'navbar-link-active' 
                        : 'navbar-link-inactive'
                    }`}
                    onClick={(e) => {
                      if (item.section) {
                        e.preventDefault();
                        scrollToSection(item.section);
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="navbar-mobile"
          >
            <div className="navbar-mobile-content">
              <div className="navbar-mobile-links">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          className={`navbar-link ${
                            isActive(item.path, item.section) 
                              ? 'navbar-link-active' 
                              : 'navbar-link-inactive'
                          }`}
                          onClick={() => setIsProductsOpen(!isProductsOpen)}
                        >
                          {item.name}
                          {/* <ChevronDown className={`w-4 h-4 ml-1 inline transition-transform ${
                            isProductsOpen ? 'rotate-180' : ''
                          }`} /> */}
                        </button>
                        {isProductsOpen && (
                          <div className="mobile-dropdown">
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className="mobile-dropdown-item"
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`navbar-link ${
                          isActive(item.path, item.section) 
                            ? 'navbar-link-active' 
                            : 'navbar-link-inactive'
                        }`}
                        onClick={(e) => {
                          if (item.section) {
                            e.preventDefault();
                            scrollToSection(item.section);
                          }
                          setIsOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;