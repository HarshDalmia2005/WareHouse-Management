import React, { useState, useEffect } from 'react';

const ExpandableSection = ({ godown, onSelectItem, searchQuery, searchLocations, filterCategory, onDropItem }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const filteredItems = godown.items?.filter(item => {
        const matchesSearch = searchQuery === "" || item.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = filterCategory === "All" || item.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    const filteredSubLocations = Array.isArray(godown.subLocations)
        ? godown.subLocations.filter(subGodown => 
            subGodown.name.toLowerCase().includes(searchLocations.toLowerCase()) || 
            subGodown.items?.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())) || 
            subGodown.subLocations?.some(sub => sub.name.toLowerCase().includes(searchLocations.toLowerCase())))
        : [];

    const handleDragStart = (event, item) => {
        event.dataTransfer.setData('item', JSON.stringify(item));
    };

    const handleDrop = (event) => {
        const itemData = event.dataTransfer.getData('item');
        const droppedItem = JSON.parse(itemData);
        onDropItem(droppedItem, godown.id);  
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        if (searchQuery.length > 0 || filterCategory !== "All") {
            setIsExpanded(true);
        }
    }, [searchQuery, filterCategory]);

    if (!filteredItems.length && !filteredSubLocations.length) {
        return null;
    }

    return (
        <div className="expandable-section text-white font-bold">
            <div
                onClick={toggleExpand}
                onDrop={handleDrop}
                onDragOver={handleDragOver} 
                className={`expandable-label hover:bg-[#715344]`}
            >
                <div className='flex space-x-2'>
                    {isExpanded ? <p>🞃</p> : <p>🞂</p>}<p>{godown.name}</p>
                </div>
            </div>

            {isExpanded && (
                <div className="expandable-content">
                    {filteredSubLocations.map(subGodown => (
                        <ExpandableSection
                            key={subGodown.id}
                            godown={subGodown}
                            onSelectItem={onSelectItem}
                            searchQuery={searchQuery}
                            searchLocations={searchLocations}
                            filterCategory={filterCategory}
                            onDropItem={onDropItem}
                        />
                    ))}
                    {filteredItems.length > 0 && (
                        <div className="items-list">
                            {filteredItems.map(item => (
                                <div
                                    key={item.item_id}
                                    className="item"
                                    draggable
                                    onDragStart={(event) => handleDragStart(event, item)}
                                    onClick={() => onSelectItem(item)}
                                >
                                    {"🛒"} {item.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ExpandableSection;
