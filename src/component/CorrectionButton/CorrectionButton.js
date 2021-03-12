import React from "react";
import "./CorrectionButton.css";

export const CorrectionButton = (props) => (
  <div className="correct-btn" onClick={props.handleCorrection}>
    {props.children}
  </div>
);
