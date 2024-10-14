import React from 'react'

const Item = ({ selectedItem }) => {
    return (
        <div className="main-section">
            {selectedItem &&
                <div className="item-details">
                    <h1 className='font-bold text-center text-2xl'>ITEM DETAILS</h1>
                    <div className='flex justify-evenly w-full mt-10'>
                        <div className='w-fit p-2 border border-black'>
                            <img src={selectedItem.image_url} alt={selectedItem.name} className='w-full' />
                            <h1 className='text-center text-lg font-bold'>{selectedItem.name}</h1>
                        </div>
                        <div className='space-y-5'>
                            <p><strong>Category:</strong> {selectedItem.category}</p>
                            <p><strong>Quantity:</strong> {selectedItem.quantity}</p>
                            <p><strong>Price:</strong> ${selectedItem.price}</p>
                            <p className='flex items-center'><strong>Status: </strong> <p className={`font-bold p-1 rounded-full ml-2  ${selectedItem.status==='in_stock'?"bg-green-500 text-black":"bg-red-500 text-white"}`}>{selectedItem.status}</p></p>
                            <p><strong>Brand:</strong> {selectedItem.brand}</p>
                            <div className=''>
                            <p className=''><strong>Attributes:</strong></p>
                            <ul className=''>
                                {Object.keys(selectedItem.attributes).map(key => (
                                    <li key={key} className='ml-5'>
                                        <strong>{key}:</strong> {selectedItem.attributes[key]}
                                    </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {!selectedItem && <p className='text-center'>No items selected</p>}
        </div>

    )
}

export default Item