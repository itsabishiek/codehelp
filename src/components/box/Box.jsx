import React from "react";
import AppModal from "../AppModal";
import "./Box.css";

const Box = ({ x, y, blur, spread, color, boxColor, bgcolor }) => {
  return (
    <div className="box-container" style={{ backgroundColor: `${bgcolor}` }}>
      <div
        className="box"
        style={{
          boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${color}`,
          backgroundColor: `${boxColor}`,
        }}
      >
        <AppModal x={x} y={y} blur={blur} spread={spread} color={color}>
          <button className="box-btn">Generate code</button>
        </AppModal>
      </div>
    </div>
  );
};

export default Box;
