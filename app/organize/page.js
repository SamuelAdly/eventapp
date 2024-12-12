'use client';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import Map from '../components/Map';
import { useAuth } from '../context/AuthUserContext';
import { db } from '../firebase';


const CreateEvent = () => {
    const { authUser, loading } = useAuth();
    const [newEvent, setNewEvent] = useState({
        title: "",
        date: "",
        description: "",
        location: "",
        lat: -33.860664,
        lng: 151.208138
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const event = {
            ...newEvent,
            uid: authUser.uid,
            createdAt: serverTimestamp(),
        }
        try {
            const docRef = await addDoc(collection(db, "events"), event);
            setNewEvent({ date: "", description: "", location: "", lat: -33.860664, lng: 151.208138, title: "" });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const handleInputChange = e => {
        const { name, value } = e.target;
        setNewEvent(prev => ({ ...prev, [name]: value }));
    };

    const handleRSVP = (eventId) => {
        alert(`RSVPed to event ID: ${eventId}`);
    };

    const onSearchClick = async () => {
        console.log("location is: " + newEvent.location);
        if (newEvent.location) {
          try {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address: newEvent.location }, (results, status) => {
              if (status === 'OK') {
                // Get the new location from the geocoding results
                const newLocation = results[0].geometry.location;
                setNewEvent({
                  ...newEvent,
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
                            name="title"
                            value={newEvent.title}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded"
                            placeholder="Event Title"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Event Date</label>
                        <input
                            type="date"
                            name="date"
                            value={newEvent.date}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Location </label>
                        <div className="flex">
                            <input
                                type="text"
                                name="location"
                                value={newEvent.location}
                                onChange={handleInputChange}
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
                            name="description"
                            value={newEvent.description}
                            onChange={handleInputChange}
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
                <Map eventLocation={{ lat: newEvent.lat, lng: newEvent.lng }} />
            </section>
        
        </div>
    );
};

export default CreateEvent;
