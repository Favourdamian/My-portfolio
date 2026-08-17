import React from "react";
import { skills } from "../data";

export default function Ticker() {
  const line = [...skills, ...skills];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {line.map((skill, index) => (
          <span key={`${skill}-${index}`}>
            {skill}
            <i> ✦ </i>
          </span>
        ))}
      </div>
    </div>
  );
}
