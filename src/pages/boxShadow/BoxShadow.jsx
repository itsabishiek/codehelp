import React, { useState } from "react";
import Box from "../../components/box/Box";
import { PrettoSlider } from "../../components/MuiSlider";
import "./BoxShadow.css";

const BoxShadow = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(2);
  const [blur, setBlur] = useState(30);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#150941");
  const [boxColor, setBoxColor] = useState("#150941");
  const [bgcolor, setBgcolor] = useState("#f8003e");

  return (
    <div className="box-controls-container">
      <div className="box-controls">
        <h1>Box Shadow Generator</h1>

        <div className="box-control-inner">
          <span className="controls-header">
            <h3>Offset X:</h3>
            <input
              type="number"
              value={x}
              onChange={(e) => setX(e.target.value)}
              className="control-input"
            />
          </span>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            min={-200}
            max={200}
            value={x}
            onChange={(event, value) => setX(value)}
          />
        </div>

        <div className="box-control-inner">
          <span className="controls-header">
            <h3>Offset Y:</h3>
            <input
              type="number"
              value={y}
              onChange={(e) => setY(e.target.value)}
              className="control-input"
            />
          </span>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            min={-200}
            max={200}
            value={y}
            onChange={(event, value) => setY(value)}
          />
        </div>

        <div className="box-control-inner">
          <span className="controls-header">
            <h3>Blur:</h3>
            <input
              type="number"
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
              className="control-input"
            />
          </span>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            min={0}
            max={200}
            value={blur}
            onChange={(event, value) => setBlur(value)}
          />
        </div>

        <div className="box-control-inner">
          <span className="controls-header">
            <h3>Spread:</h3>
            <input
              type="number"
              value={spread}
              onChange={(e) => setSpread(e.target.value)}
              className="control-input"
            />
          </span>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            min={-200}
            max={200}
            value={spread}
            onChange={(event, value) => setSpread(value)}
          />
        </div>

        <div className="box-control-inner">
          <span className="controls-header border">
            <h3>Color</h3>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </span>
        </div>

        <div className="box-control-inner">
          <span className="controls-header border">
            <h3>Box Color</h3>
            <input
              type="color"
              value={boxColor}
              onChange={(e) => setBoxColor(e.target.value)}
            />
          </span>
        </div>

        <div className="box-control-inner">
          <span className="controls-header border">
            <h3>Background Color</h3>
            <input
              type="color"
              value={bgcolor}
              onChange={(e) => setBgcolor(e.target.value)}
            />
          </span>
        </div>
      </div>

      <Box
        x={x}
        y={y}
        blur={blur}
        spread={spread}
        color={color}
        boxColor={boxColor}
        bgcolor={bgcolor}
      />
    </div>
  );
};

export default BoxShadow;
