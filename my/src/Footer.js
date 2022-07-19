import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <p className="Footer">
      This project was coded by{" "}
      <a
        href="https://github.com/Shieta/Test-Weather-React"
        target="_blank"
        rel="noreferrer"
      >
        Shienny
      </a>
      👩‍💻 and is {""}
      <a
        href="https://github.com/AlexaSheCodes/Weather-React"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on GitHub
      </a>
      {""} and {""}
      <a
        href="https://incomparable-scone-4841a9.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        hosted on Netlify
      </a>
    </p>
  );
}
