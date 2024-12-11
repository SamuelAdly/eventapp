import { useState } from "react";
import { FaCartPlus, FaTrash} from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

export default function MarketplaceCard({ item, onPurchase, onDelete, onUpdate, isOwner }) {
    const [editMode, setEditMode] = useState(false);
    const [updatedItem, setUpdatedItem] = useState(item);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedItem(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = () => {
        onUpdate(updatedItem);
        setEditMode(false);
    };

    return (
        <div className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-40 object-fill" />
            <div className="p-4">
                {editMode ? (
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={updatedItem.name}
                            onChange={handleInputChange}
                            className="w-full mb-2 px-4 py-2 border rounded"
                        />
                        <textarea
                            name="description"
                            value={updatedItem.description}
                            onChange={handleInputChange}
                            className="w-full mb-2 px-4 py-2 border rounded"
                        />
                        <input
                            type="number"
                            name="price"
                            value={updatedItem.price}
                            onChange={handleInputChange}
                            className="w-full mb-2 px-4 py-2 border rounded"
                        />
                        <input
                            type="url"
                            name="image"
                            value={updatedItem.image}
                            onChange={handleInputChange}
                            className="w-full mb-2 px-4 py-2 border rounded"
                        />
                        <button
                            onClick={handleSaveChanges}
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Save Changes
                        </button>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-xl font-bold">{item.name}</h2>
                        <p className="text-gray-600">{item.description}</p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-blue-500 font-bold">${item.price}</span>
                            <button
                                onClick={() => onPurchase(item.id)}
                                className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
                            >
                                <FaCartPlus/>
                            </button>
                        </div>
                    </div>
                )}
                {isOwner && !editMode && (
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={() => setEditMode(true)}
                            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                        >
                            <MdModeEdit/>
                        </button>
                        <button
                            onClick={onDelete}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            <FaTrash/>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
