import React from "react";
import "./GlassBox.css";

const GlassBox = ({ blur, borderRadius, color }) => {
  return (
    <div className="glass-box-container">
      <div
        className="glass-box"
        style={{
          backdropFilter: `blur(${blur}px)`,
          backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
          borderRadius: `${borderRadius}px`,
          border: "1px solid rgba(255, 255, 255, 0.25)",
          WebkitBackdropFilter: `blur(${blur}px)`,
        }}
      ></div>
    </div>
  );
};

export default GlassBox;
