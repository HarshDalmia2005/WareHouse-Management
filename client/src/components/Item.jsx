import React from 'react';
import Hero from './Hero';

const Item = ({ selectedItem }) => {
    return (
        <div className="main-section p-4 md:p-8">
            {selectedItem ? (
                <div className="item-details">
                    <h1 className='font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-8'>
                        ITEM DETAILS
                    </h1>
                    <div className='flex flex-col lg:flex-row lg:space-x-10 space-y-10 lg:space-y-0 w-full mt-10'>
                        <div className='w-full lg:w-1/3 p-2 border border-black rounded-2xl mx-auto'>
                            <img 
                                src={selectedItem.image_url} 
                                alt={selectedItem.name} 
                                className='w-full h-auto object-cover' 
                            />
                            <h1 className='text-center text-lg font-bold mt-4'>
                                {selectedItem.name}
                            </h1>
                        </div>
                        <div className="w-full lg:w-2/3">
                            {/* Make table scrollable on smaller screens */}
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full border border-gray-300">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="px-4 py-2 text-left font-bold">Field</th>
                                            <th className="px-4 py-2 text-left font-bold">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t">
                                            <td className="px-4 py-2 font-bold">Category:</td>
                                            <td className="px-4 py-2">{selectedItem.category}</td>
                                        </tr>
                                        <tr className="border-t">
                                            <td className="px-4 py-2 font-bold">Quantity:</td>
                                            <td className="px-4 py-2">{selectedItem.quantity}</td>
                                        </tr>
                                        <tr className="border-t">
                                            <td className="px-4 py-2 font-bold">Price:</td>
                                            <td className="px-4 py-2">${selectedItem.price}</td>
                                        </tr>
                                        <tr className="border-t">
                                            <td className="px-4 py-2 font-bold">Status:</td>
                                            <td className="px-4 py-2">
                                                <span 
                                                    className={`font-bold p-1 rounded-full ${
                                                        selectedItem.status === 'in_stock'
                                                        ? 'bg-green-500 text-black'
                                                        : 'bg-red-500 text-white'
                                                    }`}
                                                >
                                                    {selectedItem.status}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="border-t">
                                            <td className="px-4 py-2 font-bold">Brand:</td>
                                            <td className="px-4 py-2">{selectedItem.brand}</td>
                                        </tr>
                                        <tr className="border-t">
                                            <td className="px-4 py-2 font-bold">Attributes:</td>
                                            <td className="px-4 py-2">
                                                <div className="mt-5">
                                                    {/* Nested table for attributes */}
                                                    <div className="overflow-x-auto">
                                                        <table className="table-auto w-full border border-gray-300">
                                                            <thead>
                                                                <tr className="bg-gray-200">
                                                                    <th className="px-4 py-2 text-left font-bold">Attribute</th>
                                                                    <th className="px-4 py-2 text-left font-bold">Value</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {Object.keys(selectedItem.attributes).map(key => (
                                                                    <tr key={key} className="border-t">
                                                                        <td className="px-4 py-2 font-bold">{key}:</td>
                                                                        <td className="px-4 py-2">{selectedItem.attributes[key]}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Hero />
            )}
        </div>
    );
};

export default Item;
