import { useState } from 'react';
import cox from '../../assets/images/cox.png';
import destinations from '../../data/destination';
const Home = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    return (
        <div className="min-h-screen bg-black bg-opacity-80 flex justify-center items-center px-4 py-10">
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">

                {/* Left Side: Destination Details */}
                <div className="text-white space-y-6">
                    <h1 className="text-5xl font-bold">Cox’s Bazar</h1>
                    <p className="text-lg leading-relaxed">
                        Cox’s Bazar is a city, fishing port, tourism centre and district
                        headquarters in southeastern Bangladesh. It is famous mostly for its
                        long natural sandy beach.
                    </p>
                </div>

                {/* Right Side: Booking Form */}
                <form  className="bg-white rounded-lg shadow-md p-8 w-4/5 space-y-4">
                    <div>
                        <label className="label w-full">
                            <span className="label-text font-semibold">Origin</span>
                        </label>
                        <select name='origin' required className="select select-bordered" value={origin} onChange={(e) => setOrigin(e.target.value)}>
                        <option disabled value="" >Select Origin</option>
                        {
                            destinations.filter(dest => dest.name !== destination)
                            .map(dest => (<option key={dest.id} value={dest.name}>{dest.name}</option>) )
                        }
                        </select>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Destination</span>
                        </label>
                        <select name='destination' required className="select select-bordered" value={destination} onChange={(e) => setDestination(e.target.value)}>
                            <option disabled value=''>Select Destination</option>
                                {
                                    destinations.filter(dest => dest.name !== origin)
                                    .map(dest => (<option key={dest.id} value={dest.name}>{dest.name}</option>))
                                }
                            
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">From</span>
                            </label>
                            <input name='date_from' required type="date" className="input input-bordered w-full" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">To</span>
                            </label>
                            <input name='date_to' required type="date" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <button className="btn btn-warning w-full mt-4">Start Booking</button>
                </form>
            </div>
        </div>

    );
};

export default Home;