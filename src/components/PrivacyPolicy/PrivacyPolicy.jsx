import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sections = [
        'introduction',
        'data-collection',
        'data-gathering',
        'data-processing',
        'edge-isolation',
        'third-party',
        'security',
        'global-compliance',
        'contact'
      ];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'introduction', label: '1. Introduction' },
    { id: 'data-collection', label: '2. Data We Collect' },
    { id: 'data-gathering', label: '3. Data Gathering Method' },
    { id: 'data-processing', label: '4. Purpose of Processing' },
    { id: 'edge-isolation', label: '5. Edge & Data Isolation' },
    { id: 'third-party', label: '6. Third-Party Sharing' },
    { id: 'security', label: '7. Data Security' },
    { id: 'global-compliance', label: '8. Global Compliance' },
    { id: 'contact', label: '9. Contact Info' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="privacy-policy-page">
      <section className="privacy-hero">
        <div className="privacy-hero-content">
          <button className="privacy-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Privacy Policy</h1>
          <p>Effective Date: June 15, 2026 | Last Updated: June 15, 2026</p>
          <p className="privacy-hero-sub">How Techbrain Networks Automotive protects driver privacy, vehicle telemetry data, and battery diagnostics globally.</p>
        </div>
      </section>

      <div className="privacy-container">
        <div className="privacy-layout">
          {/* Sidebar Navigation */}
          <aside className="privacy-sidebar">
            <div className="privacy-toc-sticky">
              <h3>Policy Sections</h3>
              <ul className="privacy-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`privacy-toc-link ${activeSection === sec.id ? 'active' : ''}`}
                      onClick={() => scrollToSection(sec.id)}
                    >
                      {sec.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="privacy-main-content">
            
            <section id="introduction" className="privacy-content-section">
              <h2>1. Introduction</h2>
              <p>Techbrain Networks ("we", "us", or "our") is committed to protecting the privacy and security of our users' data. This Privacy Policy governs the processing of personal and vehicle telemetry data collected through our enterprise automotive services, including Electric Vehicle Fleet Management Systems, Advanced Driver Assistance Systems (ADAS), battery diagnostics, and cockpit software modules.</p>
              <p>As a leading supplier of safety-critical automotive software and IoT hardware, we adhere strictly to security-by-design and privacy-by-default principles. We ensure that our automotive telemetry and driver monitoring platforms minimize data collection, process sensitive inputs locally at the edge, and enforce robust encryption algorithms across all data pathways.</p>
            </section>

            <section id="data-collection" className="privacy-content-section">
              <h2>2. Types of Data We Collect</h2>
              <p>To operate our intelligent automotive systems, optimize battery lifecycles, and ensure passenger safety, we collect and process several categories of data:</p>
              <div className="privacy-feature-grid">
                <div className="privacy-card">
                  <h3 className="privacy-card-title">Vehicle Telematics</h3>
                  <p className="privacy-card-desc">Real-time battery State-of-Charge (SoC), cell-level voltage levels, battery pack temperatures, energy consumption rates, speed, odometer readings, and brake system pressure.</p>
                </div>
                <div className="privacy-card">
                  <h3 className="privacy-card-title">Spatial & GPS Location</h3>
                  <p className="privacy-card-desc">Geographic coordinates, route trajectories, altitude profiles, and depot check-in logs to enable smart routing, geofencing, and range anxiety mitigation.</p>
                </div>
                <div className="privacy-card">
                  <h3 className="privacy-card-title">Driver Biometrics & Fatigue Data</h3>
                  <p className="privacy-card-desc">Cabin camera visual vectors (such as eye closure speed, pupil tracking, and posture) used solely to calculate drowsiness indicators. <strong>Note:</strong> Raw video frames never leave the vehicle edge.</p>
                </div>
                <div className="privacy-card">
                  <h3 className="privacy-card-title">Diagnostics & ECU Logs</h3>
                  <p className="privacy-card-desc">CAN Bus error codes, Software-Over-the-Air (SOTA) update status, powertrain thermal profiles, and drivetrain vibration logs to forecast mechanical degradation.</p>
                </div>
              </div>
            </section>

            <section id="data-gathering" className="privacy-content-section">
              <h2>3. How Data is Gathered</h2>
              <p>We retrieve telemetry and user data through secure physical and digital interfaces integrated into the vehicle's electrical architecture:</p>
              <ul className="privacy-module-list">
                <li className="privacy-module-item">
                  <strong>On-Board Diagnostics (OBD-II / J1939):</strong> Physical telemetry modules connect to the vehicle CAN bus to stream electrical parameters to the edge gateway.
                </li>
                <li className="privacy-module-item">
                  <strong>Manufacturer Cloud APIs:</strong> Directly connecting to original equipment manufacturer (OEM) cloud endpoints using secure authorization tokens.
                </li>
                <li className="privacy-module-item">
                  <strong>Depot Charger Networks (OCPP):</strong> Capturing grid draw, charging duration, and connector efficiency statistics via OCPP protocols.
                </li>
                <li className="privacy-module-item">
                  <strong>Driver Mobile App:</strong> Syncing route logs, pre-trip vehicle inspect results, and manual charging confirmations directly from fleet personnel mobile devices.
                </li>
              </ul>
            </section>

            <section id="data-processing" className="privacy-content-section">
              <h2>4. Purpose of Data Processing</h2>
              <p>Techbrain Networks Automotive processes your vehicle and driver data to deliver critical operational values, including:</p>
              <div className="privacy-glass-panel">
                <h3 className="privacy-panel-heading">Key Processing Purposes</h3>
                <ul>
                  <li><strong>Smart Charging Optimization:</strong> Determining the optimal charging schedules for EV fleets to minimize energy cost grid load.</li>
                  <li><strong>Predictive Battery Health Diagnostics:</strong> Simulating battery electrochemical degradation to extend battery lifespan by 25-30%.</li>
                  <li><strong>Driver Safety:</strong> Running real-time fatigue detection models to prevent road collisions.</li>
                  <li><strong>System Optimization:</strong> Facilitating OTA firmware improvements for vehicle ECUs and battery management systems.</li>
                  <li><strong>Carbon Footprint Compliance:</strong> Aggregating energy mix figures to provide verified ESG corporate sustainability audits.</li>
                </ul>
              </div>
            </section>

            <section id="edge-isolation" className="privacy-content-section">
              <h2>5. Edge Computing & Data Isolation</h2>
              <p>We leverage advanced edge analytics to prioritize driver and user privacy. Raw sensor data, including video feeds from driver-facing cameras and microphone arrays, is processed exclusively on-board the vehicle's cockpit controller. No biometric raw data or live camera feeds are streamed to our cloud servers.</p>
              <p>Additionally, we utilize route pseudonymization algorithms which strip exact coordinates from historical travel records. Location logs are aggregated into low-resolution hex tiles to protect driver privacy from location-tracking vulnerabilities, ensuring absolute compliance with passenger privacy mandates.</p>
            </section>

            <section id="third-party" className="privacy-content-section">
              <h2>6. Third-Party Sharing & Partners</h2>
              <p>We do not sell vehicle telemetry or driver behavioral profiles to advertising networks. Data is shared only with selected partners under strict confidentiality agreements for operations:</p>
              <div className="privacy-grid-2">
                <div className="privacy-box-gray">
                  <h3>Utility Operators (OpenADR)</h3>
                  <p>Grid load demand data is shared with local power utilities to participate in automated demand-response events, balancing power grids during peak hours.</p>
                </div>
                <div className="privacy-box-gray">
                  <h3>Fleet Fleet Operators & Owners</h3>
                  <p>Fleet administrators receive aggregated vehicle location logs, battery state-of-charge tracking, and maintenance alerts for operational management.</p>
                </div>
              </div>
            </section>

            <section id="security" className="privacy-content-section">
              <h2>7. Data Security & Encryption</h2>
              <p>All automotive telemetry and personal records are encrypted at rest and in transit using state-of-the-art cryptographic protocols:</p>
              <ul className="privacy-check-list">
                <li><strong>Transport Security:</strong> Bidirectional MQTT and HTTP traffic use TLS 1.3 encryption with certificate pinning to prevent middleman exploits.</li>
                <li><strong>Hardware Cryptography:</strong> Telematics units utilize Hardware Security Modules (HSM) to store device private keys securely.</li>
                <li><strong>Access Control:</strong> Fine-grained Role-Based Access Control (RBAC) restricts internal employee access to sensitive location logs.</li>
                <li><strong>Anonymization:</strong> Time-series battery telemetry is decoupled from driver identifiers in the database layer.</li>
              </ul>
            </section>

            <section id="global-compliance" className="privacy-content-section">
              <h2>8. Global Compliance & Standards</h2>
              <p>Techbrain Networks Automotive operates in compliance with international data privacy frameworks, adapting parameters dynamically according to location:</p>
              <div className="privacy-glass-panel">
                <p><strong>GDPR Compliance:</strong> European fleet operations benefit from full data portability rights, right to erasure, and strict processing limits on location telematics.</p>
                <div className="privacy-divider"></div>
                <p><strong>CCPA / CPRA:</strong> California drivers have the right to limit the use of sensitive personal information (such as real-time location metrics) and request data reports.</p>
                <div className="privacy-divider"></div>
                <p><strong>ISO 26262 & ISO/SAE 21434:</strong> Our development methodologies incorporate functional safety and cybersecurity engineering standards to defend against hardware tampering and firmware infiltration.</p>
              </div>
            </section>

            <section id="contact" className="privacy-content-section">
              <h2>9. Contact Information</h2>
              <p>For questions regarding our Privacy Policy, data access requests, or to contact our Data Protection Officer, please reach out to us at:</p>
              <div className="privacy-contact-card">
                <h4>Techbrain Networks Automotive - DPO Office</h4>
                <p><strong>Email:</strong> privacy@techbrainnetworks.com</p>
                <p><strong>Phone:</strong> +91 8754906714</p>
                <p><strong>Address:</strong> Thanjavur, Tamilnadu, India / London, United Kingdom</p>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
