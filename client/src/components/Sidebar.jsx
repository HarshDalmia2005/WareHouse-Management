import React, { useState, useEffect } from 'react';
import ExpandableSection from './ExpandableSection';
import godownData from '../Data/godowns.json'
import ItemData from '../Data/items.json'
// Function to convert flat list of godowns into a tree structure and attach items to their sub-locations
const buildGodownTreeWithItems = (godowns, items) => {
    const godownMap = {};  // Map to hold godown by id

    // Initialize each godown in the map
    godowns.forEach(godown => {
        godownMap[godown.id] = { ...godown, subLocations: [], items: [] };
    });

    const rootGodowns = [];  // Array to hold top-level godowns

    // Attach items to their respective godowns
    items.forEach(item => {
        if (godownMap[item.godown_id]) {
            godownMap[item.godown_id].items.push(item);  // Add the item to the godown
        }
    });

    // Build the tree by connecting each sub-godown to its parent
    godowns.forEach(godown => {
        if (godown.parent_godown) {
            godownMap[godown.parent_godown].subLocations.push(godownMap[godown.id]);
        } else {
            rootGodowns.push(godownMap[godown.id]);  // This is a root-level godown
        }
    });

    return rootGodowns;  // Return the root nodes which will form the tree
};

const Sidebar = ({ onSelectItem }) => {
    const [locations, setLocations] = useState(godownData);
    const [items, setItems] = useState(ItemData);

    useEffect(() => {
        // Fetch locations (godowns.json)
        // fetch('/path/to/godowns.json')
        //     .then(res => res.json())
        //     .then(data => setLocations(data));

        // // Fetch items (items.json)
        // fetch('/path/to/items.json')
        //     .then(res => res.json())
        //     .then(data => setItems(data));

        // setLocations(godownData)
        // set
    }, []);

    // Function to get items for a specific sub-godown
    const godownTree = buildGodownTreeWithItems(locations, items);
   console.log(godownTree)
    return (
        <div className="sidebar">
            {godownTree?.map(godown => (
                <ExpandableSection
                    key={godown.id}
                    godown={godown}
                    onSelectItem={onSelectItem}
                />
            ))}
        </div>
    );
};

export default Sidebar;
