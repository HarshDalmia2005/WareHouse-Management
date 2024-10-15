import React, { useState, useEffect } from 'react';

const ExpandableSection = ({ godown, onSelectItem, searchQuery, searchLocations, filterCategory }) => {
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

    const shouldBeDisplayed = filteredItems.length > 0 || filteredSubLocations.length > 0 || godown.name.toLowerCase().includes(searchLocations.toLowerCase());

 
    if (searchLocations && (filteredSubLocations.length > 0)) {
       console.log(filteredSubLocations)
        return (
            <>
                {filteredSubLocations.map(subGodown => (
                    <ExpandableSection
                        key={subGodown.id}
                        godown={subGodown}
                        onSelectItem={onSelectItem}
                        searchQuery={searchQuery}
                        searchLocations={searchLocations}
                        filterCategory={filterCategory}
                    />
                ))}
            </>
        );
    }
    

    if(searchLocations && ( godown.name.toLowerCase().includes(searchLocations.toLowerCase()))){

        return(
            <>
            {
               godown.subLocations?.map(subGodown => (
                <ExpandableSection
                    key={subGodown.id}
                    godown={subGodown}
                    onSelectItem={onSelectItem}
                    searchQuery={searchQuery}
                    searchLocations={searchLocations}
                    filterCategory={filterCategory}
                />
            )) 
            }
            </>
        )
        
    }
 

    if (!shouldBeDisplayed) {
        return null;
    }

    return (
        <div className="expandable-section text-white font-bold">
            <div onClick={toggleExpand} className={`expandable-label hover:bg-[#715344]`}>
                <div className='flex space-x-2'>
                    {isExpanded ? <p>🞃</p> : <p>🞂</p>}<p>{godown.name}</p>
                </div>
            </div>

            {isExpanded && shouldBeDisplayed && (
                <div className="expandable-content">
                    {shouldBeDisplayed && filteredSubLocations.length > 0 ? (
                        filteredSubLocations.map(subGodown => (
                            <ExpandableSection
                                key={subGodown.id}
                                godown={subGodown}
                                onSelectItem={onSelectItem}
                                searchQuery={searchQuery}
                                searchLocations={searchLocations}
                                filterCategory={filterCategory}
                            />
                        ))
                    ) : filteredItems && filteredItems.length > 0 ? (
                        <div className="items-list">
                            {filteredItems.map(item => (
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
                        <div className="no-items">No items found</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ExpandableSection;
