import React from "react";
import "../globals.css";
export default function HomePage() {
  return (
    <main className="home-container">
      {/* Background decorations */}
       <img src="/aida-star.png" alt="" className="background" />
      <img src="/aida-star.png" alt="" className="background2" />
      <img src="/aida-star.png" alt="right decoration" className="star-right" />
      <img src="/aida-star.png" alt="background decoration" className="star-bg-left" />
      {/* Title content */}
      <div className="text-content">
        <h1 className="title">AIDA</h1>
        <p className="subtitle">creative</p>
      </div>
    </main>
  );
}
