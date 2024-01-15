import React from 'react';
import './Events.css';

const eventsArray = [
  {
    id: 0,
    date: 'Jan 22 - 28',
    title: 'La Union International Pro LQS',
    location: 'Urbiztondo Beach, San Juan, La Union, Philippines',
    series: 'Longboard Tour',
    status: 'Upcoming',
    points: 'Regional Series 1,000'
  },
  {
    id: 1,
    date: 'Jan 22 - 28',
    title: 'La Union International Pro LQS',
    location: 'Urbiztondo Beach, San Juan, La Union, Philippines',
    series: 'Longboard Tour',
    status: 'Upcoming',
    points: 'Regional Series 1,000'
  },
  {
    id: 2,
    date: 'Jan 22 - 28',
    title: 'La Union International Pro',
    location: 'Urbiztondo Beach, San Juan, La Union, Philippines',
    series: 'Qualifying Series',
    status: 'Upcoming',
    points: 'QS 3,000'
  },
  {
    id: 3,
    date: 'Jan 22 - 28',
    title: 'SLO CAL Open Pismo Beach Pro Junior',
    location: 'Pismo Beach, California, United States',
    series: 'Junior Tour',
    status: 'Upcoming',
    points: 'JR 1,000'
  },
  {
    id: 4,
    date: 'Jan 22 - 28',
    title: 'SLO CAL Open Pismo Beach',
    location: 'Pismo Beach, California, United States',
    series: 'Qualifying Series',
    status: 'Upcoming',
    points: 'QS 3,000'
  },
  {
    id: 5,
    date: 'Jan 29 - Feb 10',
    title: 'Lexus Pipe Pro Presented By YETI',
    location: 'Banzai Pipeline, Oahu, Hawaii',
    series: 'Championship Tour',
    status: 'Upcoming',
    points: 'Event 01'
  },
  {
    id: 6,
    date: 'Feb 1 - 7',
    title: 'Baler International Pro LQS',
    location: 'Sabang Beach, Baler, Philippines',
    series: 'Longboard Tour',
    status: 'Upcoming',
    points: 'Regional Series 1,000'
  },
  {
    id: 7,
    date: 'Feb 1 - 7',
    title: 'Baler International Pro',
    location: 'Sabang Beach, Baler, Philippines',
    series: 'Qualifying Series',
    status: 'Upcoming',
    points: 'QS 3,000'
  },
  {
    id: 8,
    date: 'Feb 3',
    title: 'BYD Pro URBNSURF Presented By Rip Curl & Pirate Life',
    location: 'Melbourne, Victoria, Australia',
    series: 'Qualifying Series',
    status: 'Upcoming',
    points: 'QS 3,000'
  },
  {
    id: 9,
    date: 'Feb 7 - 11',
    title: 'Cabarete Pro',
    location: 'Cabarete, Sosúa, Dominican Republic',
    series: 'Mens Qualifying Series',
    status: 'Tentative',
    points: 'MQS 1,000'
  },
  {
    id: 10,
    date: 'Feb 12 - 22',
    title: 'Hurley Pro Sunset Beach',
    location: 'Sunset Beach, Oahu, Hawaii',
    series: 'Championship Tour',
    status: 'Upcoming',
    points: 'Event 02'
  },
  {
    id: 11,
    date: 'Feb 14 - 17',
    title: 'Billabong Señoritas Open Pro',
    location: 'Señoritas, Punta Hermosa, Peru',
    series: 'Junior Tour',
    status: 'Upcoming',
    points: 'JR 1,000'
  },
  {
    id: 12,
    date: 'Feb 14 - 17',
    title: 'Billabong Señoritas Open Pro',
    location: 'Señoritas, Punta Hermosa, Peru',
    series: 'Qualifying Series',
    status: 'Upcoming',
    points: 'QS 1,000'
  },
  {
    id: 13,
    date: 'Feb 16 - 18',
    title: 'Gold Coast Open LQS',
    location: 'Burleigh Heads, Queensland, Australia',
    series: 'Longboard Tour',
    status: 'Upcoming',
    points: 'QS 1,000'
  },
  {
    id: 14,
    date: 'Feb 21 - 25',
    title: 'Uruguay Longboard Festival',
    location: 'Playa Bikini, Manantiales, Punta del Este, Uruguay',
    series: 'Longboard Tour',
    status: 'Upcoming',
    points: 'QS 1,000'
  },
  {
    id: 15,
    date: 'Feb 22 - 23',
    title: 'Port Stephens Pro',
    location: 'Birubi Beach, Port Stephens, NSW, Australia',
    series: 'Qualifying Series',
    status: 'Upcoming',
    points: 'QS 1,000'
  },
  {
    id: 16,
    date: 'Feb 24 - 25',
    title: 'Burton Automotive Pro Junior',
    location: 'Birubi Beach, Port Stephens, NSW, Australia',
    series: 'Junior Tour',
    status: 'Upcoming',
    points: 'JR 1,000'
  },
  // Add other events following the same structure
  // ...
];

const Events = () => {
  if (eventsArray.length === 0) {
    return <p>No upcoming events.</p>;
  }

  return (
    <div id="eventCalendar">
      {eventsArray.map((event) => (
        <div key={event.id} className="event-entry">
          <div className="event-date-container">
            <p className="event-date">{event.date}</p>
          </div>
          <div className="event-details-container">
            <h3 className="event-title">{event.title}</h3>
            <p className="event-location">{event.location}</p>
          </div>
          <div className="event-series-points-container">
            <h3 className="event-series">{event.series}</h3>
            <p className="event-points">{event.points}</p>
          </div>
          <div className="event-status-container">
          <p className="event-status">{event.status}</p>
          </div>
        </div>
      ))}
    </div>
);
}
  

export default Events;
