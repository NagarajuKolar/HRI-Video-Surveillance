import React, { useEffect } from 'react';
import '../CSS/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  useEffect(() => {
    // Dynamically load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.2/build/spline-viewer.js';
    document.body.appendChild(script);

    // Remove branding/logo after Spline loads
    const interval = setInterval(() => {
      const viewer = document.querySelector('spline-viewer');
      if (viewer && viewer.shadowRoot) {
        const logo = viewer.shadowRoot.querySelector('#logo');
        if (logo) {
          logo.remove();
          clearInterval(interval);
        }

      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container d-flex align-items-center justify-content-between px-5">
      
      <div className="model-section">
        <spline-viewer
          className="robo-model"
          url="https://prod.spline.design/GsE3gEVeRkZFNfYi/scene.splinecode"
        ></spline-viewer>
      </div>

      <div className="text-section text-white">
        <div className="badge mb-3">INTRODUCING △</div>
        <h1 className="Home-heading fw-bold">HUMAN RE-IDENTIFICATION IN VIDEO SURVEILLANCE</h1>
        <h2 className="mb-4">FOR SMART SECURITY SYSTEMS</h2>
        <p className="lead mb-4">
          Monitor intelligently with real-time human-robot interaction. 
          Avoid false alerts and ensure sharp detection with AI precision.
        </p>
        <div className="d-flex gap-3">
          <a href="#docs" className="btn btn-outline-light px-4 py-2">Documentation &gt;</a>
          <a href="#start" className="btn btn-light px-4 py-2">Get Started &gt;</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
