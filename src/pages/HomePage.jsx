import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star,
  Award,
  Users,
  Building,
  Target,
  Heart,
  Lightbulb
} from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faWrench,
  faShieldAlt,
  faTint,
  faMobileAlt,
  faFingerprint,
} from "@fortawesome/free-solid-svg-icons";
import HorizontalScrollCarousel from '../components/HorizontalScrollCarousel';
import ClockCard from '../components/ClockCard';
import '../styles/HomePage.css';
import '../styles/features.css';
import TestimonialsPage from './TestimonialsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const HomePage = () => {
  const [activeMode, setActiveMode] = useState("home");
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload background images with optimization
  useEffect(() => {
    const preloadImages = () => {
      const imageUrls = [
        '/assets/landingpage_optimized.jpg',
        '/assets/landinPadeDim_optimized.jpg'
      ];

      let loadedCount = 0;
      const totalImages = imageUrls.length;

      // Use Promise.all for better performance
      const loadPromises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          
          // Optimize image loading
          img.crossOrigin = 'anonymous';
          img.loading = 'eager';
          img.decoding = 'async';
          img.fetchPriority = 'high';
          
          img.onload = () => {
            loadedCount++;
            resolve(img);
          };
          
          img.onerror = () => {
            console.warn(`Failed to load image: ${url}`);
            loadedCount++;
            reject(new Error(`Failed to load: ${url}`));
          };
          
          // Set src after setting up event listeners
          img.src = url;
        });
      });

      Promise.allSettled(loadPromises).then(() => {
        setImagesLoaded(true);
      });
    };

    // Start preloading immediately with high priority
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadImages, { timeout: 1000 });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(preloadImages, 0);
    }
  }, []);

  // Handle mode switching with smooth transition
  const handleModeChange = (newMode) => {
    if (newMode !== activeMode && imagesLoaded) {
      setIsTransitioning(true);
      
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setActiveMode(newMode);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500); // Match CSS transition duration
      }, 100);
    }
  };

  const features = [
    {
      icon: faMicrophone,
      title: "Voice Control",
      description: "Control devices using Alexa or Google Assistant",
      details: [
        "Works with all major voice assistants",
        "Custom voice commands setup",
        "Multi-room control capability",
      ],
    },
    {
      icon: faFingerprint,
      title: "Touch Control",
      description: "Smooth glass touch panels for instant response",
      details: [
        "Capacitive touch technology",
        "Customizable LED indicators",
        "Gesture recognition support",
      ],
    },
    {
      icon: faWrench,
      title: "Retrofit Wiring",
      description: "Fits into existing wiring without extra work",
      details: [
        "Standard wall box compatibility",
        "Neutral wire not required",
        "Professional installation support",
      ],
    },
    {
      icon: faShieldAlt,
      title: "Durable & Long Life",
      description: "Built with quality materials for long-term use",
      details: [
        "10-year warranty included",
        "Temperature resistant design",
        "Surge protection built-in",
      ],
    },
    {
      icon: faTint,
      title: "Water Resistant",
      description: "Safe to use in kitchens and humid areas",
      details: [
        "IP65 certified protection",
        "Humidity resistant materials",
        "Easy to clean surface",
      ],
    },
    {
      icon: faMobileAlt,
      title: "App Control",
      description: "Control from anywhere using the mobile app",
      details: [
        "Remote access from anywhere",
        "Scene automation setup",
        "Energy monitoring dashboard",
      ],
    },
  ];

  const aboutStats = [
    { icon: Award, number: '17+', label: 'Years Experience' },
    { icon: Users, number: '50,000+', label: 'Happy Customers' },
    { icon: Building, number: '25+', label: 'Cities Served' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section id="home" className={`hero-section ${activeMode === "leave" ? "leave-mode" : "home-mode"} ${!imagesLoaded ? 'loading' : ''}`}>
        {/* Fixed Background Image */}
        <img 
          className={`fixed-background-img ${activeMode === "leave" ? "leave-mode" : "home-mode"}`}
          src={activeMode === "leave" ? "/assets/landinPadeDim_optimized.jpg" : "/assets/landingpage_optimized.jpg"}
          alt="Background"
        />
        
        {/* Loading Overlay */}
        {!imagesLoaded && (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading...</p>
          </div>
        )}
        
        {/* Transition Overlay */}
        {isTransitioning && (
          <div className="transition-overlay"></div>
        )}
        
        {/* Overlay for better text readability */}
        <div className="hero-overlay"></div>
        
        {/* Subtle pattern overlay */}
        <div className="hero-pattern"></div>
        
        {/* Smart Clock */}
        <ClockCard activeMode={activeMode} setActiveMode={setActiveMode} />
        
        <div className="hero-content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="hero-title"
            >
              The Smartest Thing <br /> <span className="gradient-text">On Your Wall</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="hero-subtitle"
            >
              Sleek design. Intelligent features. Total control.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="hero-buttons"
            >
              <Link to="/product/gr8-series" className="hero-button hero-button-primary">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/" className="hero-button hero-button-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Get Free Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="features-header">
          <div className="features-container">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.h1 
                variants={itemVariants}
                className="features-title"
              >
                <span className="highlight">Smart Features</span>
                <br />
                <span>That Transform Your Home</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="features-subtitle"
              >
                Experience the future of home automation with our premium smart
                switches. Sleek design meets intelligent functionality for total
                control.
              </motion.p>
            </motion.div>
          </div>
          
          <div className="features-container">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="features-grid"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="feature-card"
                >
                  <div className="icon-box">
                    <FontAwesomeIcon
                      icon={feature.icon}
                      className="feature-icon"
                    />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <ul className="feature-details">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Series Section */}
      <section id="products" className="product-series-section">
        <HorizontalScrollCarousel />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <TestimonialsPage/>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <AboutPage/>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <ContactPage/>
      </section>
    </div>
  );
};

export default HomePage;