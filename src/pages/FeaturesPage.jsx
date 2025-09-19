import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faWrench,
  faShieldAlt,
  faTint,
  faMobileAlt,
  faFingerprint,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/features.css";

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

function Features() {
  return (
    <>
      {/* Header Section */}
      <div className="features-header">
        <div className="features-container">
          <h1 className="features-title">
            <span className="highlight">Smart Features</span>
            <br />
            That Transform Your Home
          </h1>
          <p className="features-subtitle">
            Experience the future of home automation with our premium smart
            switches. Sleek design meets intelligent functionality for total
            control.
          </p>
        </div>
        <div className="features-container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="icon-box">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="feature-icon"
                    size="2x"
                  />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-details">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;