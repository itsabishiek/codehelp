import { Check, ContentCopy } from "@mui/icons-material";
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import CopyToClipboard from "react-copy-to-clipboard";
import GlassBox from "../../components/glassBox/GlassBox";
import { PrettoSlider } from "../../components/MuiSlider";
import "./Glassmorphism.css";

const Glassmorphism = () => {
  const [blur, setBlur] = useState(15);
  const [borderRadius, setBorderRadius] = useState(30);
  const [color, setColor] = useState({ r: 255, g: 255, b: 255, a: 0.15 });
  const [copied, setCopied] = useState(false);

  let code = `backdrop-filter: blur(${blur}px); \n --webkit-backdrop-filter: blur(${blur}px); \n --moz-backdrop-filter: blur(${blur}px); \n background-color: rgba(${color.r}, ${color.g}, ${color.b}, ${color.a}); \n border-radius: ${borderRadius}px; \n border: 1px solid rgba( 255, 255, 255, 0.25 );`;

  return (
    <div
      className="box-controls-container"
      style={{
        height: "100%",
        flexDirection: "column-reverse",
        overflowX: "hidden",
      }}
    >
      <div className="box-controls" style={{ padding: "20px 0" }}>
        <h1>Glassmorphism Generator</h1>

        <div className="glass-content">
          <div className="box-control-inner">
            <span className="controls-header">
              <h3>Blur</h3>
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
              <h3>Border Radius</h3>
              <input
                type="number"
                value={borderRadius}
                onChange={(e) => setBorderRadius(e.target.value)}
                className="control-input"
              />
            </span>

            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              min={0}
              max={200}
              value={borderRadius}
              onChange={(event, value) => setBorderRadius(value)}
            />
          </div>
        </div>

        <div className="box-control-inner">
          <span className="glass-color-container">
            <div className="glass-color">
              <h3>Background Color</h3>

              <SketchPicker
                color={color}
                onChangeComplete={(color) => setColor(color.rgb)}
              />
            </div>

            <div className="glass-color-code">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h3>CSS Code</h3>
                <CopyToClipboard
                  text={code}
                  onCopy={() => {
                    setCopied(true);
                    setInterval(() => {
                      setCopied(false);
                    }, 2000);
                  }}
                >
                  <button className="gradient-copy">
                    {copied ? (
                      <Check fontSize="small" />
                    ) : (
                      <ContentCopy fontSize="small" />
                    )}
                  </button>
                </CopyToClipboard>
              </div>

              <p>{`backdrop-filter: blur(${blur}px);`}</p>
              <p>{`--webkit-backdrop-filter: blur(${blur}px);`}</p>
              <p>{`--moz-backdrop-filter: blur(${blur}px);`}</p>
              <p>{`background-color: rgba(${color.r}, ${color.g}, ${color.b}, ${color.a});`}</p>
              <p>{`border-radius: ${borderRadius}px;`}</p>
              <p>{`border: 1px solid rgba( 255, 255, 255, 0.25 );`}</p>
            </div>
          </span>
        </div>
      </div>

      <GlassBox blur={blur} borderRadius={borderRadius} color={color} />
    </div>
  );
};

export default Glassmorphism;
