'use client';
import React from 'react';


const EventCard = ({localEvent, onRSVP}) => {
     const {id, title, date, location, description} = localEvent;

    return(
        <div className="max-w-sm p-4 border rounded shadow-lg bg-white text-black">
            <h3 className="text-lg font-bold mb-2">{localEvent.title}</h3>

            <p className="text-sm text-gray-600 mb-2">{localEvent.date}</p>

            <p className="text-sm text-gray-700 mb-4">{localEvent.description}</p>

            

            <button onClick={() => onRSVP(localEvent.id)} className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">RSVP</button>
        </div>
    )

}

export default EventCard;