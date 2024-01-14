import React from 'react';
import './Events.css';

const eventsArray = [
    { id: 1, date: '2023-11-10', event: 'High Tide Challenge', location: 'Bondi Beach', description: 'Annual surfing competition.' },
    { id: 2, date: '2023-12-05', event: 'Surfing Workshop', location: 'Malibu Beach', description: 'Beginner-friendly surfing workshop.' },
    // ... other events
];

const Events = () => {
    if (eventsArray.length === 0) {
        return <p>No upcoming events.</p>;
    }

    return (
        <div id="eventCalendar">
            {eventsArray.map((event) => (
                <div key={event.id} className="event-entry">
                    <h3>{event.event}</h3>
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    <p>{event.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Events;
