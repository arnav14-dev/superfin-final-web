import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ProductPage.css";

// Card type to background color mapping
const getCardBackgroundColor = (cardType) => {
  const colorMap = {
    gradient: "linear-gradient(135deg, #d4af37 0%, #e6c547 100%)",
    minimal: "#d4af37",
    glass: "rgba(212, 175, 55, 0.8)",
    bordered: "#b8860b",
    shadow: "#f4e4a6",
  };
  return colorMap[cardType] || "#d4af37";
};

const ProductSeries = {
  "GR8 Series": {
    id: "1",
    description:
      `The GR8 Series is our premium modular series, crafted for modern living.It combines reliable performance with a neat modular design.Built to last and easy to use, it’s a switch you can trust every day.`,
    brochureLink: "/assets/gr8 list final.pdf",
    cards: [
      {
        id: "gr8-card1",
        title: "Advanced Connectivity",
        description:
          "Available in 10 variety of switches and five different varieties of plates.",
        image: '/assets/GR8_1.png',
        cardType: "gradient",
      },
      {
        id: "gr8-card2",
        title: "Premium Modular Switches",
        description:
          "Switches That Match Your Style.",
        image: '/assets/GR8_2.png',
        cardType: "minimal",
      },
    ],
  },
  "Fix Series": {
    id: "2",
    description:
      "The FIX Series is a modular series made for simple, everyday use.It offers sturdy build quality with a straightforward design.Reliable, practical, and long-lasting — switches that make daily life easier.",
    brochureLink: "/assets/FIX P LIST 2024.pdf",
    cards: [
      {
        id: "fix-card1",
        title: "Reliable Performance",
        description:
          "Available in 12+ variety of switches and 10 different varieties of plates.",
        image: '/assets/FIX_1.png',
        cardType: "glass",
      },
      {
        id: "fix-card2",
        title: "Modular switches",
        description:
          "Durable. Practical. Affordable.",
        image: '/assets/FIX_2.png',
        cardType: "bordered",
      },
    ],
  },
  "Classic Series": {
    id: "3",
    description:
      "Classic Series is fully customizable range, this series lets you choose from 5 colors, 2 to 18 modules, and your own icons. Available in glass or acrylic with matte or glossy finishes, it’s made to perfectly match your style and space.",
    brochureLink: "/assets/Classic Series catalogue.pdf",
    cards: [
      {
        id: "classic-card5",
        title: "Colour Options available",
        description:
          "Multiple color variants to perfectly match your home's aesthetic.",
        image: "/assets/CLASSIC1.png",
        cardType: "shadow",
      },
      {
        id: "classic-card3",
        title: "Available in Glass & Acrylic",
        description:
          "Choose between premium glass and acrylic materials for sophisticated aesthetics.",
        image: "/assets/classicMini4.png",
        cardType: "glass",
      },
      {
        id: "classic-card4",
        title: "Glossy & Matte Finish Options",
        description:
          "Select from glossy or matte finishes to complement your interior design.",
        image: "/assets/classicMini5.png",
        cardType: "bordered",
      },
      {
        id: "classic-card2",
        title: "Customised icon",
        description:
          "Personalized iconography and visual elements for intuitive control.",
        image: "/assets/classicMini2.png",
        cardType: "minimal",
      },
      {
        id: "classic-card1",
        title: "Full customisation",
        description:
          "Complete personalization options to match your unique style and preferences.",
        image: "/assets/classicMini1.png",
        cardType: "gradient",
      },
    ],
  },
  "Uniq Series": {
    id: "4",
    description:
      "Uniq series is available in 2, 4, 6, and 8 modules, this series comes in sleek black and white with 30+ variants. Its toughened glass panel is anti-fingerprint for a clean look, while the inbuilt Wi-Fi chip and master control make your home truly smart.",
    brochureLink: "/assets/uniq series.pdf",
    cards: [
      {
        id: "uniq-card1",
        title: "Toughened glass panel",
        description:
          "Durable glass panels designed to withstand daily use while maintaining elegance.",
        image: "/assets/uniq1.png",
        cardType: "gradient",
      },
      {
        id: "uniq-card2",
        title: "Panel Colour options available",
        description:
          "Multiple panel color options to complement any interior design scheme.",
        image: "/assets/uniq2.png",
        cardType: "minimal",
      },
      {
        id: "uniq-card3",
        title: "Available in 2,4,6,8 module sizes",
        description:
          "Flexible module configurations to suit different installation requirements.",
        image: "/assets/uniq3.png",
        cardType: "glass",
      },
    ],
  },
  "Nano Series": {
    id: "5",
    description:
      "The Nano Series fits right into your modular plate with easy retrofit wiring. Its inbuilt Wi-Fi makes your home smarter, and with eight variants, there’s one for every style.",
    brochureLink: "/assets/Nano series .pdf",
    cards: [
      {
        id: "nano-card1",
        title: "Child lock",
        description:
          "Advanced child lock mechanisms to ensure maximum safety for young families.",
        image: "/assets/nano1.png",
        cardType: "shadow",
      },
      {
        id: "nano-card2",
        title: "Zero trouble installation",
        description:
          "Effortless installation process with clear instructions and no complications.",
        image: "/assets/nano2.png",
        cardType: "gradient",
      },
      {
        id: "nano-card3",
        title: "Waterguard display",
        description:
          "Water-resistant display technology for reliable operation in humid conditions.",
        image: "/assets/nano3.png",
        cardType: "minimal",
      },
      {
        id: "nano-card4",
        title: "Shock proof",
        description:
          "Enhanced safety features with shock-proof design for complete protection.",
        image: "/assets/nano4.png",
        cardType: "glass",
      },
    ],
  },
  "Nova Series": {
    id: "6",
    description:
      "Nova series is available in 2–12 modules with custom icons, 2 panel and 3 bezel colors. Metal base & border, 2.5D curved glass, 16A load with 2.5KV overload protection, and 50+ variants.",
    brochureLink: "/assets/Nova Series.pdf",
    cards: [
      {
        id: "metal-card1",
        title: "Available in 2,4,6,8,12 Modules",
        description:
          "Flexible options to suit different installation requirements.",
        image: "/assets/NOVA_1.png",
        cardType: "bordered",
      },
      {
        id: "metal-card2",
        title: "Customised Icon",
        description:
          "Personalized icons for easy identification of switches.",
        image: "/assets/NOVA_2.png",
        cardType: "shadow",
      },
      {
        id: "metal-card3",
        title: "2.5D Curved Toughened Glass Panel",
        description:
          "Stylish and durable glass design with a premium finish.",
        image: "/assets/NOVA_3.png",
        cardType: "gradient",
      },
    ],
  },
};

function ProductPage() {
  const { seriesname } = useParams();
  const navigate = useNavigate();
  const [selectedSeries, setSelectedSeries] = useState("GR8 Series");
  const seriesOptions = Object.keys(ProductSeries);

  // Function to convert URL parameter to series name
  const urlToSeriesName = (urlParam) => {
    if (!urlParam) return "GR8 Series";
    const decodedParam = decodeURIComponent(urlParam);
    const formattedName = decodedParam
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    const matchedSeries = seriesOptions.find(
      (series) =>
        series.toLowerCase().replace(/\s+/g, "-") === urlParam.toLowerCase() ||
        series.toLowerCase() === formattedName.toLowerCase()
    );
    return matchedSeries || "GR8 Series";
  };

  // Function to convert series name to URL parameter
  const seriesToUrlParam = (seriesName) => {
    return seriesName.toLowerCase().replace(/\s+/g, "-");
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Set selected series based on URL parameter on component mount or URL change
  useEffect(() => {
    if (seriesname) {
      const selectedFromUrl = urlToSeriesName(seriesname);
      setSelectedSeries(selectedFromUrl);
    } else {
      navigate(`/product/${seriesToUrlParam("GR8 Series")}`, { replace: true });
    }
  }, [seriesname, navigate]);

  const currentSeriesData =
    ProductSeries[selectedSeries] || ProductSeries["GR8 Series"];

  const handleSeriesChange = (series) => {
    setSelectedSeries(series);
    const urlParam = seriesToUrlParam(series);
    navigate(`/product/${urlParam}`, { replace: true });
  };

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
    <div className="product-page">
      <div className="product-page-wrapper">
        <div className="product-page-container">
          <aside className="product-page-sidebar">
            <div className="product-page-filter-section">
              <h3 className="product-page-filter-title">Product Series</h3>
              <div className="product-page-series-buttons">
                {seriesOptions.map((series) => (
                  <button
                    key={series}
                    className={`product-page-series-btn ${
                      selectedSeries === series ? "active" : ""
                    }`}
                    onClick={() => handleSeriesChange(series)}
                  >
                    <span className="series-btn-text">{series}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <main className="product-page-main-content">
            <motion.div 
              className="product-page-main-card fade-in"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="product-page-main-card-details">
                <motion.h2 
                  variants={itemVariants}
                  className="product-page-section-title"
                >
                  {selectedSeries}
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="product-page-description"
                >
                  {currentSeriesData.description}
                </motion.p>
                <motion.a
                  variants={itemVariants}
                  href={currentSeriesData.brochureLink}
                  className="product-page-download-brochure"
                  download
                >
                  <span>Download Brochure</span>
                  <Download className="product-page-download-icon" />
                </motion.a>
              </div>
            </motion.div>

            {currentSeriesData.cards && currentSeriesData.cards.length > 0 && (
              <motion.div 
                className="product-page-cards-section"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="cards-header">
                  <motion.h3 
                    variants={itemVariants}
                    className="product-page-cards-title"
                  >
                    Key Features
                  </motion.h3>
                  <motion.div 
                    variants={itemVariants}
                    className="cards-subtitle"
                  >
                    Discover what makes our products exceptional
                  </motion.div>
                </div>
                <div className="product-page-cards-grid">
                  {currentSeriesData.cards.map((card, index) => {
                    const bgColor = getCardBackgroundColor(card.cardType);
                    const isEven = index % 2 === 0;

                    return (
                      <motion.div
                        key={card.id}
                        className={`product-page-small-card ${isEven ? 'left-image' : 'right-image'}`}
                        variants={itemVariants}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <div
                          className="product-page-card"
                        >
                          <div className="product-page-card-image-container">
                            <img
                              src={card.image}
                              alt={card.title}
                              className="product-page-card-image"
                            />
                          </div>
                          <div className="product-page-card-content">
                            <h4 className="product-page-card-title">{card.title}</h4>
                            <p className="product-page-card-description">{card.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
