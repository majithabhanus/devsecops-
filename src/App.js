import React from "react";
import "./App.css"; // optional styling

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>MyCompany</h1>
        <nav>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Grow Your Business With Us</h2>
        <p>We provide innovative solutions to help your brand succeed online.</p>
        <button>Get Started</button>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Modern, responsive websites tailored to your needs.</p>
          </div>
          <div className="service-card">
            <h3>Digital Marketing</h3>
            <p>Boost your online presence with targeted campaigns.</p>
          </div>
          <div className="service-card">
            <h3>Consulting</h3>
            <p>Expert advice to grow and scale your business.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          We are a team of professionals passionate about helping businesses
          thrive in the digital world.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 MyCompany. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
