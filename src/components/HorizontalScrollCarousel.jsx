import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/productScroll.css";

const HorizontalScrollCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  const navigate = useNavigate();

  // Sample images - you can replace these with your own
  const slides = [
    {
      id: 0,
      src: "/assets/2.svg",
      src2: "/assets/1.svg",
      alt: "Uniq Series",
      href: "/product/uniq-series",
    },
    {
      id: 1,
      src: "/assets/3.svg",
      src2: "/assets/4.svg",
      alt: "Classic",
      href: "/product/classic-series",
    },
    {
      id: 2,
      src: "/assets/5.svg",
      src2: "/assets/6.svg",
      alt: "Nano",
      href: "/product/nano-series",
    },
    {
      id: 3,
      src: "/assets/7.svg",
      src2: "/assets/8.svg",
      alt: "abcs",
      href: "/product/nova-series",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Helper function to calculate circular distance
  const getCircularDistance = (from, to, total) => {
    const direct = to - from;
    const wrap = direct > 0 ? direct - total : direct + total;
    return Math.abs(direct) <= Math.abs(wrap) ? direct : wrap;
  };

  // Get transform styles for each slide with circular positioning
  const getSlideTransform = (index) => {
    const distance = getCircularDistance(activeIndex, index, slides.length);
    const absDistance = Math.abs(distance);
    const url = distance === 0 ? slides[index].src2 : slides[index].src;

    if (absDistance === 0) {
      // Active slide (center)
      return {
        transform: `translateX(0px) translateZ(0px) rotateY(0deg) scale(1.3)`,
        opacity: 1,
        zIndex: 10,
        url,
      };
    } else if (absDistance === 1) {
      // Adjacent slides (immediate left/right)
      const rotateY = distance > 0 ? 5 : -5;
      const translateZ = -120;
      const translateX = distance > 0 ? 600 : -600;
      return {
        transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(0.85)`,
        opacity: 0.7,
        zIndex: 5,
        url,
      };
    } else if (absDistance === 2) {
      // Second-level slides
      const rotateY = distance > 0 ? 5 : -5;
      const translateZ = -240;
      const translateX = distance > 0 ? 1200 : -1200;
      return {
        transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(0.7)`,
        opacity: 0.5,
        zIndex: 2,
        url,
      };
    } else {
      // Hidden slides (far away)
      const rotateY = distance > 0 ? 0 : 0;
      const translateZ = -360;
      const translateX = distance > 0 ? 1500 : -1500;
      return {
        transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(0.6)`,
        opacity: 0,
        zIndex: -1,
        url,
      };
    }
  };

  return (
    <div className="productScrollMainContainer">
      <h2 className="products-title">
        <span className="products-title-gradient">
          <p>Our</p>
          <p className="products-title-gradient-productText">Product</p>
          <p>Range</p>
        </span>
        <p className="products-description">
          Discover our comprehensive collection of premium electrical products
          designed for modern living and working spaces.
        </p>
      </h2>
      <div className="coverflow-wrapper">
        <div className="coverflow-container">
          {/* Carousel Container */}
          <div ref={carouselRef} className="carousel-container">
            {/* Slides */}
            {slides.map((slide, index) => {
              const slideStyle = getSlideTransform(index);
              const isDimmed = slideStyle.opacity < 1;
              return (
                <div
                  key={slide.id}
                  className={`carousel-slide ${isDimmed ? "dimmed" : ""}`}
                  style={{
                    transform: slideStyle.transform,
                    zIndex: slideStyle.zIndex,
                  }}
                  data-bg
                  onClick={() => {
                    goToSlide(index);
                    navigate(`${isDimmed ? "" : slide.href}`);
                  }}
                >
                  <div
                    className="slide-content"
                    style={{
                      "--bg-image": `url(${slideStyle.url})`,
                    }}
                  />
                </div>
              );
            })}
          </div>
          {/* Navigation Buttons */}
          <button onClick={prevSlide} className="nav-button nav-button-left">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button onClick={nextSlide} className="nav-button nav-button-right">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
