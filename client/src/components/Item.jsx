import React from 'react'
import Hero from './Hero'

const Item = ({ selectedItem }) => {
    return (
        <div className="main-section">
            {selectedItem &&
                <div className="item-details">
                    <h1 className='font-bold text-center text-2xl'>ITEM DETAILS</h1>
                    <div className='flex flex-col space-y-10 w-full mt-10'>
                        <div className='w-fit p-2 border border-black rounded-2xl mx-auto'>
                            <img src={selectedItem.image_url} alt={selectedItem.name} className='w-full' />
                            <h1 className='text-center text-lg font-bold'>{selectedItem.name}</h1>
                        </div>
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
                                        <span className={`font-bold p-1 rounded-full ${selectedItem.status === 'in_stock' ? 'bg-green-500 text-black' : 'bg-red-500 text-white'}`}>
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
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            }
            {!selectedItem && <Hero/>}
        </div>

    )
}

export default Item