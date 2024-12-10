'use client'
import React, { useState, useEffect } from 'react'
import MarketplaceCard from '../components/MarketplaceCard';
export default function Marketplace() {
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newItem, setNewItem] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
    });
    
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("/marketplace.json"); // Replace with your actual API endpoint
                if (!response.ok) {
                    throw new Error("Failed to Fetch Items From Database")
                }
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error("Failed to fetch items:", error);
            }
        };
        fetchItems();
        }, []);
    
    const handlePurchase = (itemId) => {
        alert(`Purchased item ID: ${itemId}`);
    };

    const handleAddItem = (e) => {
        e.preventDefault();
        const item = { ...newItem, id: items.length + 1 };
        setItems((prevItems) => [item, ...prevItems]);
        setNewItem({ name: '', description: '', price: '', image: '' });
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewItem((prev) => ({ ...prev, [name]: value}))
    }
    
    return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
        <section className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-4xl font-bold mb-6">
                Local Marketplace
            </h2>
            <p className="text-lg font-medium">
                Explore and purchase items from our community marketplace.
            </p>
            <button
            onClick={() => setShowModal(true)}
            className="mt-4 px-6 py-2 bg-white text-blue-500 font-semibold rounded shadow hover:bg-gray-100"
            >
                Add Item
            </button>
        </section>

        {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white text-gray-800 rounded-lg p-6 w-96">
                <h3 className="text-xl font-bold mb-4">Add a New Item</h3>
                <form onSubmit={handleAddItem}>
                    <div className="mb-4">
                        <input
                        type="text"
                        name="name"
                        placeholder="Item Name"
                        value={newItem.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded shadow-sm"
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={newItem.description}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded shadow-sm"
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={newItem.price}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded shadow-sm"
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                        type="url"
                        name="image"
                        placeholder="Image URL"
                        value={newItem.image}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded shadow-sm"
                        required
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded shadow hover:bg-gray-400"
                        >
                        Cancel
                        </button>
                        <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
                        >
                        Add Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
        )}


        <div className="container mx-auto p-6">
            <div className="grid grid-cols-3 gap-6">
                {items.map((item) => (
                    <MarketplaceCard key={item.id} item={item} onPurchase={handlePurchase} />
                ))}
            </div>
        </div>
    </div>
    )
}