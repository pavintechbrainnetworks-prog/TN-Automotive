import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Terms.css';

const Terms = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('agreement');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sections = [
        'agreement',
        'software-license',
        'hardware-deploy',
        'permitted-use',
        'v2g-grid',
        'intellectual-property',
        'liability',
        'indemnification',
        'governing-law'
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
    { id: 'agreement', label: '1. Agreement to Terms' },
    { id: 'software-license', label: '2. Software & Updates' },
    { id: 'hardware-deploy', label: '3. Hardware Devices' },
    { id: 'permitted-use', label: '4. Safety & Permitted Use' },
    { id: 'v2g-grid', label: '5. V2G & Energy Grid' },
    { id: 'intellectual-property', label: '6. Intellectual Property' },
    { id: 'liability', label: '7. Liability Limitations' },
    { id: 'indemnification', label: '8. Indemnification' },
    { id: 'governing-law', label: '9. Governing Law' }
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
    <div className="terms-page">
      <section className="terms-hero">
        <div className="terms-hero-content">
          <button className="terms-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Terms & Conditions</h1>
          <p>Effective Date: June 15, 2026 | Last Updated: June 15, 2026</p>
          <p className="terms-hero-sub">Enterprise Agreement governing the deployment of Techbrain Networks Automotive software, telematics hardware, and cloud diagnostics.</p>
        </div>
      </section>

      <div className="terms-container">
        <div className="terms-layout">
          {/* Sidebar Navigation */}
          <aside className="terms-sidebar">
            <div className="terms-toc-sticky">
              <h3>Terms Sections</h3>
              <ul className="terms-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`terms-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="terms-main-content">
            
            <section id="agreement" className="terms-content-section">
              <h2>1. Agreement to Terms</h2>
              <p>By purchasing, installing, or utilizing the software-as-a-service (SaaS) platforms, embedded software, or physical IoT telematics devices supplied by Techbrain Networks Automotive, you ("Client", "User", or "Fleet Operator") agree to be bound legally by these Terms and Conditions.</p>
              <p>If you are entering into this Agreement on behalf of a logistics company, transit authority, or enterprise entity, you warrant that you possess the necessary organizational authority to bind said entity. If you do not accept all clauses outlined herein, you are prohibited from utilizing our automotive diagnostic systems and cloud portals.</p>
            </section>

            <section id="software-license" className="terms-content-section">
              <h2>2. Software Licensing & Updates</h2>
              <p>Subject to timely payment of subscription fees, Techbrain Networks grants the Client a non-exclusive, non-transferable, revocable license to utilize our vehicle telemetry dashboards, EV fleet management portals, and local cockpit application interfaces.</p>
              <div className="terms-glass-panel">
                <h3 className="terms-panel-heading">Critical License Restrictions</h3>
                <ul>
                  <li><strong>No Reverse Engineering:</strong> Client shall not decompile, reverse-engineer, or attempt to extract the source code or proprietary CAN bus parsing signals of our OBD-II modules or ECU controllers.</li>
                  <li><strong>OTA Updates:</strong> The Client acknowledges and agrees that the software will periodically initiate Software-Over-the-Air (SOTA) and Firmware-Over-the-Air (FOTA) updates to enforce functional safety and cybersecurity patches.</li>
                  <li><strong>Scope:</strong> Cockpit edge licenses are locked to registered Vehicle Identification Numbers (VINs) and cannot be migrated to unlicensed third-party machinery.</li>
                </ul>
              </div>
            </section>

            <section id="hardware-deploy" className="terms-content-section">
              <h2>3. Telematics & Hardware Deployment</h2>
              <p>For operations requiring local sensors, Techbrain Networks provides physical IoT hardware (e.g., OBD-II reader units, J1939 CAN bridges, and temperature telemetry arrays):</p>
              <ul className="terms-module-list">
                <li className="terms-module-item">
                  <strong>Installation:</strong> Fleet operators are solely responsible for ensuring that physical hardware is installed correctly by certified automotive electricians in accordance with local safety regulations.
                </li>
                <li className="terms-module-item">
                  <strong>Risk of Loss:</strong> Once physical hardware is delivered to the Client's depot, risk of damage or physical deterioration transfers entirely to the Client.
                </li>
                <li className="terms-module-item">
                  <strong>Warranty:</strong> Hardware devices carry a standard 12-month manufacturer repair warranty covering electrical defects, excluding physical tampering or water damage.
                </li>
              </ul>
            </section>

            <section id="permitted-use" className="terms-content-section">
              <h2>4. Permitted Use & Road Safety</h2>
              <p>The Client agrees to operate all vehicles and systems in absolute compliance with municipal traffic codes, driver licensing guidelines, and weight regulations. Additionally:</p>
              <div className="terms-feature-grid">
                <div className="terms-card">
                  <h3 className="terms-card-title">Attention Mandates</h3>
                  <p className="terms-card-desc">Advanced Driver Assistance Systems (ADAS) and fatigue alerts are auxiliary tools. The human driver remains responsible for vehicle control at all times.</p>
                </div>
                <div className="terms-card">
                  <h3 className="terms-card-title">Governing Governors</h3>
                  <p className="terms-card-desc">It is strictly forbidden to bypass, hack, or adjust the speed-governing settings or safety boundaries of cockpit controls deployed by our software.</p>
                </div>
                <div className="terms-card">
                  <h3 className="terms-card-title">Telemetry Integrity</h3>
                  <p className="terms-card-desc">Client will not modify, disconnect, or inject artificial payloads into telematics links to distort battery health projections or ESG carbon logs.</p>
                </div>
              </div>
            </section>

            <section id="v2g-grid" className="terms-content-section">
              <h2>5. Smart Grid & Vehicle-to-Grid (V2G)</h2>
              <p>When using our Smart Depot Charging Scheduler and Vehicle-to-Grid (V2G) systems, the Client agrees to terms concerning local utility grid feedback:</p>
              <p>All V2G discharge events are calculated by AI algorithms based on live utility price feeds via OpenADR. While we aim to minimize utility peak charges, Techbrain Networks is not liable for fluctuations in power grid rates or grid feed-in rejection by local utility companies. The Client must maintain appropriate grid interconnection agreements with local distributors prior to initiating V2G operations.</p>
            </section>

            <section id="intellectual-property" className="terms-content-section">
              <h2>6. Intellectual Property Rights</h2>
              <p>All intellectual property rights associated with Techbrain Networks Automotive—including but not limited to battery State of Health (SoH) prediction models, neural network weights for fatigue tracking, time-series layouts, proprietary CAN bus protocols, and design aesthetics—are the sole property of Techbrain Networks.</p>
              <p>No ownership of intellectual property is transferred under this Agreement. Customer telemetry logs ingested by our platform remain the property of the Customer, provided that Techbrain Networks is granted a perpetual, royalty-free license to use anonymized aggregate data to train machine learning models.</p>
            </section>

            <section id="liability" className="terms-content-section">
              <h2>7. Limitation of Liability</h2>
              <p className="terms-highlight-text">To the maximum extent permitted by applicable law, Techbrain Networks shall not be liable for any indirect, incidental, special, exemplary, or consequential damages arising out of vehicle operations.</p>
              <div className="terms-glass-panel">
                <p><strong>Collision Disclaimer:</strong> We are not liable for vehicle collisions, cargo damage, bodily injuries, or operational disengagements occurring while utilizing our ADAS or telematics services.</p>
                <div className="terms-divider"></div>
                <p><strong>Battery Degradation:</strong> AI recommendations are guidelines. We hold no liability for accelerated battery physical capacity decay due to operational extremes chosen by operators.</p>
                <div className="terms-divider"></div>
                <p><strong>Max Liability Cap:</strong> In all circumstances, our maximum aggregate liability for any claim shall not exceed the subscription fees paid by the Client to Techbrain Networks during the 6-month period preceding the claim.</p>
              </div>
            </section>

            <section id="indemnification" className="terms-content-section">
              <h2>8. Indemnification</h2>
              <p>The Client agrees to defend, indemnify, and hold harmless Techbrain Networks, its officers, engineers, and sub-contractors from any third-party claims, lawsuits, or liabilities arising from:</p>
              <ul className="terms-check-list">
                <li>Negligent or dangerous operation of vehicles by Client drivers.</li>
                <li>Grid damage or substation overloading caused by improper physical installation of charging terminals.</li>
                <li>Violation of labor regulations or privacy guidelines regarding driver biometrics and route tracking.</li>
                <li>Unauthorized modification of telematics hardware or software source codes.</li>
              </ul>
            </section>

            <section id="governing-law" className="terms-content-section">
              <h2>9. Governing Law & Dispute Resolution</h2>
              <p>These Terms and Conditions shall be governed by, construed, and enforced in accordance with the laws of India (State of Tamil Nadu) for operations based in Asia, or the laws of the United Kingdom for European operations, without regard to conflict of law principles.</p>
              <p>Any dispute, controversy, or claim arising out of this Agreement shall be settled by binding arbitration in accordance with the Arbitration Rules of the respective jurisdiction, with the seat of arbitration residing in Thanjavur, India or London, United Kingdom. The language of arbitration shall be English.</p>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Terms;
