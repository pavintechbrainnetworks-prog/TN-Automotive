import React from 'react';
import { Target, Lightbulb, Heart, Users } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section bg-light">
      <div className="container">
        <h2 className="section-title">About Company</h2>
        <p className="section-subtitle">
          Techbrain Networks is a leading Software Product Development company specializing in Connected Vehicles, Autonomous Driving (ADAS), EV Fleet Systems, V2X Communications, and Automotive Cybersecurity.
        </p>

        <div className="grid grid-cols-4 about-grid">
          <div className="glass-card about-card p-6">
            <div className="icon-wrapper">
              <Target size={32} />
            </div>
            <h3>Vision</h3>
            <p>
              We aspire to be a global leader in automotive technology innovation, setting new benchmarks for connected vehicle safety, EV fleet efficiency, and smart city integration. Our goal is to create a future where intelligent mobility elevates quality of life, reduces carbon footprints, and fosters global collaboration.
            </p>
          </div>

          <div className="glass-card about-card p-6">
            <div className="icon-wrapper">
              <Lightbulb size={32} />
            </div>
            <h3>Mission</h3>
            <p>
              We are dedicated to empowering automakers, fleet operators, and transit agencies globally with cutting-edge software and hardware solutions. Our commitment is to deliver reliable, scalable, and secure automotive products that drive vehicle intelligence and enable our clients to excel in a rapidly evolving mobility landscape.
            </p>
          </div>

          <div className="glass-card about-card p-6">
            <div className="icon-wrapper">
              <Heart size={32} />
            </div>
            <h3>Passion</h3>
            <p>
              Our passion for automotive R&D fuels our relentless pursuit of elegant solutions to complex transportation challenges. From low-latency ADAS stacks to secure V2X protocols and AI-driven predictive vehicle diagnostics, every product reflects our commitment to engineering excellence and safety.
            </p>
          </div>
        </div>

        <div className="glass-card about-card p-6 highlight-card">
          <div className="icon-wrapper">
            <Users size={32} />
          </div>
          <h3>Team & Impact</h3>
          <p>
            We are revolutionizing the future of transportation with our suite of 20 advanced automotive products. Starting in 2027, our solutions will expand to 30 countries, optimizing transit networks, securing connected cars, and driving EV adoption. Our mission is to make smart, safe, and clean mobility accessible to all.
          </p>
          <div className="founder-info mt-4">
            <strong>Ramkumar Arunachalam</strong>
            <span>Founder of Techbrain Networks</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
