import React from 'react'
import HeroImg from './Hero1.jpg'
const Hero = () => {
    return (
        <div className='flex space-x-2 w-full h-full items-center bg-white rounded-2xl p-1'>
            <div className="hero-section text-center py-10 bg-gray-100 min-h-96 p-1 rounded-3xl">
                <h1 className="text-5xl font-bold mb-4">
                    <span className="text-[#DA8E42]">Streamline Your</span> Warehouse Management
                </h1>
                <h2 className="text-xl mb-6">
                    Discover a smarter way to <span className="text-[#DA8E42]">manage your warehouse</span>
                </h2>
                <button className=" text-black py-2 px-4 rounded">Get Started Today</button>
            </div>

            <div className='w-full min-h-1/2'>
                <img src={HeroImg} alt="" className='min-h-96 rounded-xl' />
            </div>
        </div>
    )
}

export default Hero