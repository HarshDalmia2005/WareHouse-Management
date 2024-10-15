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
    const [searchQuery, setSearchQuery] = useState('');
    const [searchLocations, setSearchLocations] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const handleSearch2Change = (e) => {
        setSearchLocations(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setFilterCategory(e.target.value);
    };


    useEffect(() => {
        fetch('https://warehouse-management-backend-qxu0.onrender.com/locations')
            .then(res => res.json())
            .then(data => setLocations(data));
       
        fetch('https://warehouse-management-backend-qxu0.onrender.com/items')
            .then(res => res.json())
            .then(data => setItems(data));

       
    }, []);

    const godownTree = buildGodownTreeWithItems(locations, items);
   console.log(godownTree)
    return (
        <div className="sidebar bg-[#644536] md:w-full min-w-screen">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for items"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input p-2 border border-gray-300 rounded-md bg-transparent w-full mb-5"
                />
            </div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for locations"
                    value={searchLocations}
                    onChange={handleSearch2Change}
                    className="search-input p-2 border border-gray-300 rounded-md bg-transparent w-full mb-5"
                />
            </div>

            <div className="filter-bar mb-5">
                <select
                    value={filterCategory}
                    onChange={handleCategoryChange}
                    className="filter-select p-2 border border-gray-300  w-full rounded-md bg-transparent"
                >
                    <option value="All">All Categories</option>
                    <option value="Toys">Toys</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Clothing">Clothing</option>
                    {/* Add other categories as needed */}
                </select>
            </div>
            {godownTree?.map(godown => (
                <ExpandableSection
                    key={godown.id}
                    godown={godown}
                    onSelectItem={onSelectItem}
                    searchQuery={searchQuery}
                    searchLocations={searchLocations}
                    filterCategory={filterCategory}
                />
            ))}
        </div>
    );
};

export default Sidebar;
