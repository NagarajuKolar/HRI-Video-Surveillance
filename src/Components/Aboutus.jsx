import React from 'react';
import '../CSS/Aboutus.css';
import aboutBg from '../assets/aboutusimage.png'; 
import aboutImg from '../assets/headerimg.jpg'; 

function Aboutus() {
  return (
    <>
    <div className="about-section" style={{ backgroundImage: `url(${aboutBg})` }}>
      <div className="about-overlay">
        <h2>About Us</h2>
        <p>
          HRI Video Surveillance helps identify individuals from one or more videos using AI-powered
          face recognition and behavior analysis. Our system ensures safety, accountability, and
          intelligent monitoring across environments like campuses, cities, or businesses.
        </p>
      </div>
    </div>

   <div className="aboutus-container">
      <div className="aboutus-image">
        <img src={aboutImg} alt="About HRI Surveillance" />
      </div>
      <div className="aboutus-content">
        <h2>This Is HRI-Vision</h2>
        <h4>Human Re-Identification In Video Surveillance System</h4>
        <p>
          Human Re-Identification (HRI) is a cutting-edge video surveillance technology that enables tracking and identifying individuals across multiple camera views—even when the person is not continuously visible. 
        </p>
        <p>
          Sentinel-Vision uses AI-powered facial recognition, behavior pattern analysis, and smart matching algorithms to ensure real-time monitoring of people across campuses, transit systems, retail environments, and secure facilities. 
        </p>
        <p>
          Our advanced analytics deliver unmatched situational awareness, enabling faster decision-making, improved security protocols, and enhanced public safety. With global deployments and cloud-based scalability, Sentinel-Vision is redefining what’s possible in modern surveillance systems.
        </p>
      </div>
    </div>
    <div className="aboutus-usecases">
  <h3>Where HRI-Vision Makes a Difference</h3>
  <ul className='ul-class'>
    <li>
      <strong>Airports:</strong> Track individuals from entry to boarding, flag potential threats, and reduce security bottlenecks with seamless identity continuity.
    </li>
    <li>
      <strong>Malls & Retail Spaces:</strong> Monitor crowd behavior, detect suspicious movement, and enhance loss prevention by re-identifying individuals across multiple zones.
    </li>
    <li>
      <strong>Smart Cities:</strong> Integrate with city-wide CCTV networks to follow persons-of-interest across districts, helping law enforcement in real-time.
    </li>
    <li>
      <strong>Corporate Campuses:</strong> Restrict unauthorized access, audit movement across buildings, and ensure compliance with safety protocols.
    </li>
    <li>
      <strong>Transportation Hubs:</strong> Provide live tracking and re-identification in metro stations, bus terminals, and train platforms for efficient incident response.
    </li>
  </ul>
</div>

</>
    
  );
}

export default Aboutus;
