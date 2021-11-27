import {
  Check,
  ContentCopy,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowUp,
} from "@mui/icons-material";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

const Gradient = () => {
  const [colorOne, setColorOne] = useState("#fcb045");
  const [colorTwo, setColorTwo] = useState("#e23b3b");
  const [colorThree, setColorThree] = useState("#833ab4");
  const [direction, setDirection] = useState("top right");
  const [copied, setCopied] = useState(false);

  let div = document.querySelector(".gradient-buttons");
  let button = document.querySelectorAll(".gradient-buttons button");

  button.forEach((el) => {
    el.addEventListener("click", function () {
      div.querySelector(".active").classList.remove("active");

      el.classList.add("active");
    });
  });

  let outputCode = `background-image: linear-gradient(to ${direction}, ${colorOne}, 
          ${colorTwo}, ${colorThree});`;

  return (
    <div
      className="gradient"
      style={{
        backgroundImage: `linear-gradient(to ${direction}, ${colorOne}, ${colorTwo}, ${colorThree})`,
      }}
    >
      <div className="gradient-container">
        <div className="gradient-inputs">
          <input
            type="color"
            value={colorOne}
            onChange={(e) => setColorOne(e.target.value)}
          />
          <input
            type="color"
            value={colorTwo}
            onChange={(e) => setColorTwo(e.target.value)}
          />
          <input
            type="color"
            value={colorThree}
            onChange={(e) => setColorThree(e.target.value)}
          />
        </div>
        <div className="gradient-buttons">
          <button value={direction} onClick={() => setDirection("top")}>
            <KeyboardArrowUp />
          </button>
          <button value={direction} onClick={() => setDirection("bottom")}>
            <KeyboardArrowDown />
          </button>
          <button value={direction} onClick={() => setDirection("right")}>
            <KeyboardArrowRight />
          </button>
          <button value={direction} onClick={() => setDirection("left")}>
            <KeyboardArrowLeft />
          </button>

          <button
            value={direction}
            onClick={() => setDirection("top right")}
            className="rotate-icon active"
          >
            <KeyboardArrowUp />
          </button>
          <button
            value={direction}
            onClick={() => setDirection("bottom left")}
            className="rotate-icon"
          >
            <KeyboardArrowDown />
          </button>
          <button
            value={direction}
            onClick={() => setDirection("bottom right")}
            className="rotate-icon"
          >
            <KeyboardArrowRight />
          </button>
          <button
            value={direction}
            onClick={() => setDirection("top left")}
            className="rotate-icon"
          >
            <KeyboardArrowLeft />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <h3 style={{ color: "var(--primary-color)" }}>CSS Code</h3>
          <CopyToClipboard
            text={outputCode}
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

        <div className="gradient-code">{outputCode}</div>

        <Link
          to="/gradient-generator"
          style={{
            marginTop: 20,
            textDecoration: "none",
            color: "var(--primary-color)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid var(--background-color-light)",
            borderRadius: 10,
          }}
        >
          <p style={{ fontSize: 14, padding: 4 }}>Dual gradient</p>
        </Link>
      </div>
    </div>
  );
};

export default Gradient;
