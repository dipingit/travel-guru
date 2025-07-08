import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import destinations from "../../data/destination";
import stays from "../../data/stays";

const Booking = () => {
    const location = useLocation();
    const destination = location.state?.destination;
    const filteredStays = stays.filter(stays => stays.destination === destination);
    
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="min-h-1/2 bg-white px-6 py-10">
                <h2 className="text-3xl font-bold mb-6">Stays in {destination}</h2>
                {filteredStays.map(stay => 
                <div key={stay.id} className="space-y-6">
                    {/* Single Stay Card */}
                    <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow p-4 gap-6">
                        <img
                            src={stay.image}
                            alt="Sea View Resort"
                            className="w-full md:w-64 h-40 object-cover rounded"
                        />

                        <div className="flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="text-xl font-semibold">{stay.name}</h3>
                                <p className="text-gray-600 mb-2">
                                    {stay.description}
                                </p>

                                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                                        {stay.amenities.map((amenity, index) => (
                                            <li key={index}>{amenity}</li>
                                            
                                        ))}
                                </ul>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-end justify-between mt-4">
                                <div className="text-sm text-gray-500">
                                    4 guests · 2 bedrooms · 2 beds · 2 baths
                                </div>
                                <div className="text-right mt-2 md:mt-0">
                                    <div className="text-lg font-bold">${stay.pricePerNight}/ night</div>
                                    <div className="text-sm text-yellow-600 font-medium">⭐ {stay.rating}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
               
            </div>
        </div>

    );
};

export default Booking;