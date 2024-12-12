'use client';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import EventCard from "../components/EventCard";
import { db } from '../firebase';
import { FaCirclePlus } from "react-icons/fa6";





const EventList = () => {
    
    const [events, setEvents] = useState([]);
        useEffect(() => {
            const fetchEvents = async () => {
                try {
                    const docsRef = await getDocs(collection(db, "events"));
                    setEvents(docsRef.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                } catch (error) {
                    console.error("Failed to fetch items:", error);
                }
            };
            fetchEvents();
        }, []);

    const handleRSVP = (eventId) => {
        alert(`RSVPed to event ID : ${eventId}`);
    }
    
    return(
        <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
            { /* Page header */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h1 className="text-4xl font-bold mb-6">Community Events</h1>
            </section>
            <a href='/organize'>
                <button
                    className="flex fixed bottom-6 right-6 px-2 py-2 bg-white text-blue-500 font-semibold rounded shadow hover:bg-gray-300 items-center justify-center space-x-2"
                >
                    <FaCirclePlus className="text-xl" />
                    <span>Create Event</span>
                </button>
            </a>
            { /* Events */}

            <div className="container mx-auto p-6">
                <div className="grid grid-cols-3 gap-y-4">
                {events.map((event) => (
                    <EventCard key={event.id} localEvent={event} onRSVP={handleRSVP} />
                ))}
                </div>
            </div>
        </div>
    )

}

export default EventList;