'use client';
import React, { useState } from 'react';
import Map from '../components/Map';


const CreateEvent = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    // address as a string
    const [eventAddress, setEventAddress] = useState('');
    const [eventLocation, setEventLocation] = useState({ lat: -33.860664, lng: 151.208138 }); 
    const [description, setDescription] = useState('');
    const [events, setEvents] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEvent = {
            id: events.length + 1,
            title,
            date,
            location: eventLocation,
            description,
        };

        setEvents([...events, newEvent]);

        setTitle('');
        setDate('');
        setEventAddress('');
        setDescription('');
    };

    const handleRSVP = (eventId) => {
        alert(`RSVPed to event ID: ${eventId}`);
    };

    const onSearchClick = async () => {
        console.log("location is: " + eventLocation);
        if (eventAddress) {
          try {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address: eventAddress }, (results, status) => {
              if (status === 'OK') {
                // Get the new location from the geocoding results
                const newLocation = results[0].geometry.location;
                setEventLocation({
                  lat: newLocation.lat(),
                  lng: newLocation.lng(),
                });
              } else {
                alert('Geocode was not successful for the following reason: ' + status);
              }
            });
          } catch (error) {
            console.error(error);
          }
        }
      }



    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-600 text-white p-6">
            <section className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">Create a Community Event</h1>

                <form onSubmit={handleSubmit} className="bg-white text-black p-6 rounded shadow-md">
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Event Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Event Title"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Event Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Location </label>
                        <div className="flex">
                            <input
                                type="text"
                                value={eventAddress}
                                onChange={(e) => setEventAddress(e.target.value)}
                                className="w-1/2 px-4 py-2 border rounded mr-2"
                                placeholder="Ex: 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA"
                                required
                            />
                            
                        <div>
                            <button className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600" type="button" onClick={onSearchClick}>Show Location</button>
                        </div>
                            
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Event Description"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                    >
                        Create Event
                    </button>
                </form>
                
            </section>
            <section className="container mx-auto text-center">
                <Map eventLocation={eventLocation}/>
            </section>
        
        </div>
    );
};

export default CreateEvent;
