import React from 'react'

const Item = ({selectedItem}) => {
    return (
        <div className="main-section">
            {selectedItem &&
                <div className="item-details">
                    <h1>{selectedItem.name}</h1>
                    <img src={selectedItem.image_url} alt={selectedItem.name} />
                    <p><strong>Category:</strong> {selectedItem.category}</p>
                    <p><strong>Quantity:</strong> {selectedItem.quantity}</p>
                    <p><strong>Price:</strong> ${selectedItem.price}</p>
                    <p><strong>Status:</strong> {selectedItem.status}</p>
                    <p><strong>Brand:</strong> {selectedItem.brand}</p>
                    <p><strong>Attributes:</strong></p>
                    <ul>
                        {Object.keys(selectedItem.attributes).map(key => (
                            <li key={key}>
                                <strong>{key}:</strong> {selectedItem.attributes[key]}
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>

    )
}

export default Item