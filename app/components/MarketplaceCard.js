export default function MarketplaceCard({item, onPurchase}) {
    return (
        <div className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-40 object-fill" />
            <div className="p-4">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-500 font-bold">${item.price}</span>
                    <button
                    onClick={() => onPurchase(item.id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
                    >
                    Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}