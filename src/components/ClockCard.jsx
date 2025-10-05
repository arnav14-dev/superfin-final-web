import React, { useEffect, useState } from "react";
import { Fingerprint, Hand, HandIcon, HandMetalIcon, Home, LucideHand, MousePointer, MousePointerSquare, Pointer } from "lucide-react";
import "../styles/ClockCard.css";

const ClockCard = ({ activeMode, setActiveMode }) => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })
  );
  const [date, setDate] = useState("");
  const [temperature, setTemperature] = useState(28);

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

  return (
    <div className={`smart-clock glass-card ${activeMode === "leave" ? "leave-mode" : "home-mode"}`}>
      <div className="temp-date">
        <span className="dot">{temperature}°C,</span>
        <span className="date">{date}</span>
      </div>
      
      <div className="time">{time}</div>
      
      <div className="buttons">
        <button
          className={`mode-btn ${activeMode === "home" ? "active" : "hidden"}`}
          onClick={() => setActiveMode("home")}
          title="Click to switch to Home mode"
        >
                <Home size={16} />
          <span>Home mode</span>
        </button>
        <button
          className={`mode-btn ${activeMode === "leave" ? "active" : "hidden"}`}
          onClick={() => setActiveMode("leave")}
          title="Click to switch to Leave mode"
        >
                <Home size={16} />
          <span>Leave mode</span>
        </button>
      </div>
      <div className="click-hint">
        <span>Tap to switch</span>
        <Pointer size={20} />
      </div>
    </div>
  );
};

export default ClockCard;
