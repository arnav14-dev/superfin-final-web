import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import "../styles/ClockCard.css";

const ClockCard = ({ activeMode, setActiveMode }) => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })
  );
  const [date, setDate] = useState("");
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateDate = () => {
      const options = { day: "numeric", month: "short", weekday: "short" };
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-GB", options);
      setDate(formattedDate);
    };
    updateDate();
    const interval = setInterval(updateDate, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchTemperature = async () => {
      const url = `http://api.weatherapi.com/v1/current.json?key=bf5f36e357894a258ba105112251107&q=India&aqi=yes`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setTemperature(data.current.temp_c.toFixed(0));
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      }
    };
    fetchTemperature();
  }, []);

  return (
    <div className={`smart-clock glass-card ${activeMode === "leave" ? "leave-mode" : "home-mode"}`}>
      <div className="temp-date">
        <span className="dot">{temperature ? `${temperature}°C` : "..."},</span>
        <span className="date">{date}</span>
      </div>
      
      <div className="time">{time}</div>
      
      <div className="buttons">
        <button
          className={`mode-btn ${activeMode === "home" ? "active" : "hidden"}`}
          onClick={() => setActiveMode("home")}
        >
          <FaHome size={16} />
          <span>Home mode</span>
        </button>
        <button
          className={`mode-btn ${activeMode === "leave" ? "active" : "hidden"}`}
          onClick={() => setActiveMode("leave")}
        >
          <FaHome size={16} />
          <span>Leave mode</span>
        </button>
      </div>
    </div>
  );
};

export default ClockCard;
