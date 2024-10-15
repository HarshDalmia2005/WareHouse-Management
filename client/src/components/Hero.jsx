import React from 'react';
import HeroImg from './Hero1.jpg';

const Hero = () => {
    return (
        <div className="flex flex-col md:justify-center md:items-center w-full h-full bg-white rounded-2xl p-6">
            <h1 className="text-4xl md:text-7xl mb-6 md:mb-10 text-black font-bold text-center">
                Welcome!
            </h1>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
              
                <div className="hero-section text-center md:text-left py-10 bg-gray-100 min-h-96 p-6 rounded-3xl md:w-1/2 w-full">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-[#DA8E42]">Streamline Your</span> Warehouse Management
                    </h1>
                    <h2 className="text-lg md:text-xl mb-6">
                        Discover a smarter way to{' '}
                        <span className="text-[#DA8E42]">manage your warehouse</span>
                    </h2>
                    <button className="bg-[#DA8E42] text-white py-2 px-4 rounded hover:bg-[#c77d36]">
                        Get Started Today
                    </button>
                </div>

                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img
                        src={HeroImg}
                        alt="Hero"
                        className="w-full h-auto "
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
