import React, { useRef } from 'react';
import './Home.css';

const Home = () => {
  const firstSectionRef = useRef(null);

  const scrollToSection = () => {
    firstSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <video className="hero-video" autoPlay loop muted>
          <source src="/images/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Welcome to Savvy Surfer</h1>
          <p>Explore the world of surfing, discover tips, and connect with the community.</p>
          <button className="explore-button" onClick={scrollToSection}>Start Exploring</button>
        </div>
      </section>

      <section ref={firstSectionRef} className="savvy-surfer-info">
        <h2>About Savvy Surfer</h2>
        <p>Discover the joy of surfing with Savvy Surfer. We bring you closer to the waves, the culture, and the community.</p>
      </section>

      <section className="events-link">
        <h2>Events</h2>
        <p>Join exciting surfing events and competitions. Check out our <a href="/Events">Events page</a> for more information.</p>
      </section>

      <section className="tutorials-link">
        <h2>Tutorials</h2>
        <p>Learn new surfing skills or refine your techniques. Visit our <a href="/Tutorials">Tutorials page</a> for guides and tips.</p>
      </section>

      <section className="community-link">
        <h2>Community</h2>
        <p>Connect with surfers worldwide. Share your experiences and stories on our <a href="/Community">Community page</a>.</p>
      </section>
    </div>
  );
};

export default Home;
