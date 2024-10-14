import React, { useState } from 'react';
import open from './folder.png'
import closed from'./folder-closed-black-shape.png'
const ExpandableSection = ({ godown, onSelectItem }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="expandable-section">
            <div onClick={toggleExpand} className="expandable-label">
            {isExpanded ? <img src={open} style={{width:"1rem"}}/> : <img src={closed} style={{width:"1rem"}}/>} <p>{godown.name}</p>
            </div>

            {isExpanded && (
                <div className="expandable-content">
                    {/* Display Sub-locations if present */}
                    {godown.subLocations && godown.subLocations.length > 0 ? (
                        godown.subLocations.map(subGodown => (
                            <ExpandableSection
                                key={subGodown.id}
                                godown={subGodown}
                                onSelectItem={onSelectItem}
                            />
                        ))
                    ) : (
                        /* If no sub-locations, display items */
                        godown.items && godown.items.length > 0 ? (
                            <div className="items-list">
                                {godown.items.map(item => (
                                    <div
                                        key={item.item_id}
                                        className="item"
                                        onClick={() => onSelectItem(item)}
                                    >
                                       {"🛒"} {item.name}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="no-items">No items</div>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default ExpandableSection;
