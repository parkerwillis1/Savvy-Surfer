import React from 'react';
import './Home.css'; // Ensure this file exists and contains your desired styles

const Home = () => {
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
          <button className="explore-button">Start Exploring</button>
        </div>
      </section> {/* Close the hero-section here */}

            <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="event-card">Surf Competition - June 15</div>
        <div className="event-card">Beach Clean-up - July 22</div>
      </section>

      <section className="featured-tutorials">
        <h2>Featured Tutorials</h2>
        <div className="tutorial-card">Beginner's Guide</div>
        <div className="tutorial-card">Advanced Techniques</div>
      </section>

      <section className="community-feedback">
        <h2>What Our Users Say</h2>
        <p>"Savvy Surfer has been a game-changer for my surfing journey!" - Alex</p>
        <p>"A great community and resource for surfers of all levels." - Jamie</p>
      </section>
    </div>
  );
};

export default Home;
