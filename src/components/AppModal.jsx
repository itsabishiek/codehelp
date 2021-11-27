import React, { useState } from "react";
import { Modal } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Check, ContentCopy } from "@mui/icons-material";

const AppModal = ({ children, x, y, blur, spread, color }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let code = `box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${color}; \n -webkit-box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${color}; \n -moz-box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${color};`;

  return (
    <div>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#110736",
            color: "var(--text-color)",
            padding: "25px 20px",
            margin: 20,
            borderRadius: 10,
            border: "1px solid var(--background-color-light)",
            outline: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3
              style={{
                color: "var(--primary-color)",
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              CSS Code
            </h3>

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

          <div>
            <p>{`box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${color};`}</p>
            <p>{`-webkit-box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${color};`}</p>
            <p>{`-moz-box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${color};`}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AppModal;
