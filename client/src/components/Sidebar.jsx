import React, { useState, useEffect } from 'react';
import ExpandableSection from './ExpandableSection';
import godownData from '../Data/godowns.json'
import ItemData from '../Data/items.json'

const buildGodownTreeWithItems = (godowns, items) => {
    const godownMap = {};  

  
    godowns.forEach(godown => {
        godownMap[godown.id] = { ...godown, subLocations: [], items: [] };
    });

    const rootGodowns = []; 

    items.forEach(item => {
        if (godownMap[item.godown_id]) {
            godownMap[item.godown_id].items.push(item);  
        }
    });

  
    godowns.forEach(godown => {
        if (godown.parent_godown) {
            godownMap[godown.parent_godown].subLocations.push(godownMap[godown.id]);
        } else {
            rootGodowns.push(godownMap[godown.id]);  
        }
    });

    return rootGodowns;  
}

const Sidebar = ({ onSelectItem }) => {
    const [locations, setLocations] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://warehouse-management-backend-qxu0.onrender.com/locations')
            .then(res => res.json())
            .then(data => setLocations(data));
       
        fetch('https://warehouse-management-backend-qxu0.onrender.com/items')
            .then(res => res.json())
            .then(data => setItems(data));

       
    }, []);

    // Function to get items for a specific sub-godown
    const godownTree = buildGodownTreeWithItems(locations, items);
   console.log(godownTree)
    return (
        <div className="sidebar bg-[#644536] md:w-full min-w-screen">
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
