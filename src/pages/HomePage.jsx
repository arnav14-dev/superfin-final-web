import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  DownloadIcon,
} from "lucide-react";

import HorizontalScrollCarousel from "../components/HorizontalScrollCarousel";
import ClockCard from "../components/ClockCard";
import "../styles/HomePage.css";
import "../styles/features.css";
import TestimonialsPage from "./TestimonialsPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import FeaturePage from "./FeaturePage";

const HomePage = () => {
  const [activeMode, setActiveMode] = useState("home");
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload background images with optimization
  useEffect(() => {
    const preloadImages = () => {
      const imageUrls = [
        "/assets/landingpage_optimized.jpg",
        "/assets/landinPadeDim_optimized.jpg",
      ];

      let loadedCount = 0;

      // Use Promise.all for better performance
      const loadPromises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();

          // Optimize image loading
          img.crossOrigin = "anonymous";
          img.loading = "eager";
          img.decoding = "async";
          img.fetchPriority = "high";

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
    if ("requestIdleCallback" in window) {
      requestIdleCallback(preloadImages, { timeout: 1000 });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(preloadImages, 0);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section
        id="home"
        className={`hero-section ${
          activeMode === "leave" ? "leave-mode" : "home-mode"
        } ${!imagesLoaded ? "loading" : ""}`}
      >
        {/* Fixed Background Image */}
        <img
          className={`fixed-background-img ${
            activeMode === "leave" ? "leave-mode" : "home-mode"
          }`}
          src={
            activeMode === "leave"
              ? "/assets/landinPadeDim_optimized.jpg"
              : "/assets/landingpage_optimized.jpg"
          }
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
        {isTransitioning && <div className="transition-overlay"></div>}

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
            <motion.h1 variants={itemVariants} className="hero-title">
              The Smartest Thing <br />{" "}
              <span className="gradient-text">On Your Wall</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-subtitle">
              Sleek design. Intelligent features. Total control.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-buttons">
              <Link
                to="/product/gr8-series"
                className="hero-button hero-button-primary"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://drive.google.com/file/d/1m9WAaMn9WBaDgNz8anIyeMvBC76Jj5ZZ/view?usp=sharing"
                download="Superfin Master Catalogue.pdf" // This tells the browser to suggest this filename
                target="_blank" // Optional: Opens the link in a new tab
                rel="noopener noreferrer" // Recommended for security when using target="_blank"
                className="hero-button hero-button-primary"
              >
                Get Master Catalogue
                <DownloadIcon />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <FeaturePage/>
      </section>

      {/* Product Series Section */}
      <section id="products" className="product-series-section">
        <HorizontalScrollCarousel />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <TestimonialsPage />
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <AboutPage />
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <ContactPage />
      </section>
    </div>
  );
};

export default HomePage;
