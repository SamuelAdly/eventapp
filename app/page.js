export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Discover & Organize Local Community Events
        </h2>
        <p className="text-lg mb-8">
          Connect with your community through engaging events. Whether you’re
          hosting or attending, we make it easy to share experiences and make
          memories.
        </p>
        <div>
          <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded shadow hover:bg-yellow-400 mr-4">
            <a href="/explore">
              Explore Events
            </a>
          </button>
          <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded shadow hover:bg-gray-100">
              Create an Event
            
          </button>
        </div>
      </section>
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white text-blue-500 p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Explore Local Events</h3>
          <p>Find events near you with ease using our interactive map and filtering tools.</p>
        </div>
        <div className="bg-white text-blue-500 p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Organize Your Events</h3>
          <p>Host events and share them with your community in just a few clicks.</p>
        </div>
        <div className="bg-white text-blue-500 p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Connect & RSVP</h3>
          <p>Stay connected by RSVPing to events and receiving timely notifications.</p>
        </div>
      </section>
      <section className="container mx-auto px-6 py-16 text-center bg-white text-blue-500 rounded shadow">
        <h3 className="text-2xl font-bold mb-4">Ready to Join the Community?</h3>
        <p className="mb-6">Sign up today and start exploring or organizing local events.</p>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600">
          Get Started
        </button>
      </section>
      <footer className="container mx-auto px-6 py-6 text-center text-gray-200">
        <p>&copy; {new Date().getFullYear()} EventApp. All rights reserved.</p>
      </footer>
      
    </div>
  );
}
