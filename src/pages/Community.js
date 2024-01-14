import React from 'react';
import './Community.css'; // Ensure the CSS file exists

const Community = () => {
    return (
        <div className="community-container">
            <h1>Welcome to the Savvy Surfer Community!</h1>
            <p>Join us in fostering a welcoming and vibrant surfing community.</p>
            
            <section className="community-guidelines">
                <h2>Community Guidelines</h2>
                <ul>
                    <li>Respect all members and their opinions.</li>
                    <li>Share your experiences and tips generously.</li>
                    <li>Keep all discussions on-topic and friendly.</li>
                    {/* Additional guidelines */}
                </ul>
            </section>

            <section className="member-stories">
                <h2>Member Stories</h2>
                <p>Read inspiring stories from our community members.</p>
                {/* Member stories content */}
            </section>

            <section className="community-qa">
                <h2>Community Q&A</h2>
                <p>Have questions? Get answers from experienced surfers!</p>
                {/* Q&A content */}
            </section>

            <section className="photo-gallery">
                <h2>Photo Gallery</h2>
                <p>Check out exciting surfing moments captured by our members!</p>
                {/* Gallery content */}
            </section>

            <section className="upcoming-events">
                <h2>Upcoming Community Events</h2>
                <p>Stay tuned for upcoming events and gatherings!</p>
                {/* Event details or links */}
            </section>

            {/* Additional sections */}
        </div>
    );
};

export default Community;
