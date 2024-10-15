import React, { useState } from 'react';
const ExpandableSection = ({ godown, onSelectItem }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="expandable-section text-white font-bold">
            <div onClick={toggleExpand} className={`expandable-label hover:bg-[#715344]`}>
                <div className='flex space-x-2'>
               
            {isExpanded ? <p> &#128899;</p> :<p> &#128898;</p>}<p>{godown.name}</p> </div>
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
