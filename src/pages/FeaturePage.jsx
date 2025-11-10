import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faMicrophone,
  faWrench,
  faShieldAlt,
  faTint,
  faMobileAlt,
  faFingerprint,
} from "@fortawesome/free-solid-svg-icons";

const FeaturePage = () => {
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
    <div className="features-header">
      <div className="features-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h1 variants={itemVariants} className="features-title">
            <span className="highlight">Smart Switch Features</span>
            <br />
            <span>That Transform Your Home</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="features-subtitle">
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
                <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
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
  );
};

export default FeaturePage;
