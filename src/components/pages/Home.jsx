import cox from '../../assets/images/cox.png';
import sree from '../../assets/images/Sreemongol.png';
import sundarban from '../../assets/images/sundorbon.png';

const Home = () => {
     
    return (
        <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${cox})` }}>
            {/* Dark overlay for entire hero */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center h-full px-8 py-16 text-white">

                {/* Left: Text Content */}
                <div className="max-w-lg mb-10 lg:mb-0">
                    <h1 className="text-5xl font-bold mb-4">Cox’s Bazar</h1>
                    <p className="mb-6">
                        Cox’s Bazar is a city, fishing port, tourism centre and district
                        headquarters in southeastern Bangladesh. It is famous mostly for
                        its long natural sandy beach.
                    </p>
                    <div className="flex gap-4 items-center">
                        <button className="btn btn-warning">Booking</button>
                     
                    </div>
                </div>

                {/* Right: Destination Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
                    {/* Card 1 */}
                    <div className="relative w-60 h-80 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={cox}
                            alt="Cox's Bazar"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10 flex items-end p-4">
                            <h2 className="text-lg font-semibold">Cox's Bazar</h2>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative w-60 h-80 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={sree}
                            alt="Sreemangal"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10 flex items-end p-4">
                            <h2 className="text-lg font-semibold">Sreemangal</h2>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative w-60 h-80 rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={sundarban}
                            alt="Sundarbans"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10 flex items-end p-4">
                            <h2 className="text-lg font-semibold">Sundarbans</h2>
                        </div>
                      
                    </div>
                    <div className="space-x-2 mt-7">
                        <button className="btn btn-sm btn-outline border-white text-white hover:bg-white hover:text-black">Previous</button>
                        <button className="btn btn-sm btn-outline border-white text-white hover:bg-white hover:text-black">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;