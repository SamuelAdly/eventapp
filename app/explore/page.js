'use client';
import React from 'react';
import EventCard from "../components/EventCard";

const events = [
    {
      id: 1,
      title: "Yoga Class",
      date: "2024-12-10",
      location: { lat: 40.7128, lng: -74.006 },
      description: "Join us for a relaxing yoga session in the park.",
    },
    {
      id: 2,
      title: "Art Fair",
      date: "2024-12-15",
      location: { lat: 40.7306, lng: -73.9352 },
      description: "Explore local art and meet the artists.",
    },
  ];




const EventList = () => {
    // const {title, date, location, description} = localEvent;
    
    const handleRSVP = (eventId) => {
        alert(`RSVPed to event ID : ${eventId}`);
    }
    
    return(
        <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
            <section className="container mx-auto px-6 py-16 text-center">

                <h1 className="text-4xl font-bold mb-6">Community Events</h1>
            </section>
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                    <EventCard key={event.id} localEvent={event} onRSVP={handleRSVP} />
                ))}
                </div>
            </div>
        </div>
    )

}

export default EventList;