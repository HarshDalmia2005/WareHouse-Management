import React, { useState, useEffect } from 'react';
import ExpandableSection from './ExpandableSection';
import { Circles } from 'react-loader-spinner';

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
};

const Sidebar = ({ onSelectItem }) => {
    const [locations, setLocations] = useState([]);
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchLocations, setSearchLocations] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch2Change = (e) => {
        setSearchLocations(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setFilterCategory(e.target.value);
    };

    const onDropItem = (item, newGodownId) => {
        const updatedItems = items.map(i =>
            i.item_id === item.item_id ? { ...i, godown_id: newGodownId } : i
        );
        setItems(updatedItems);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const locationsResponse = await fetch('https://warehouse-management-vht1.onrender.com/locations');
                const itemsResponse = await fetch('https://warehouse-management-vht1.onrender.com/items');
                const locationsData = await locationsResponse.json();
                const itemsData = await itemsResponse.json();

                setLocations(locationsData);
                setItems(itemsData);
            } catch (error) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const godownTree = buildGodownTreeWithItems(locations, items);

    return (
        <div className="sidebar bg-[#644536] md:w-full min-w-screen max-h-screen overflow-y-scroll">
            {loading ? (
                <div className="flex justify-center items-center h-full space-x-2 ">
                    <Circles color="#DA8E42" height={20} width={20} />
                    <span className='text-[#DA8E42]'>Loading</span>
                </div>
            ) : (
                <>
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
                            className="filter-select p-2 border border-gray-300 w-full rounded-md bg-transparent"
                        >
                            <option value="All">All Categories</option>
                            <option value="Toys">Toys</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Clothing">Clothing</option>
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
                            onDropItem={onDropItem}
                        />
                    ))}
                    {error && <p className='text-center text-white'>{error}</p>}
                </>
            )}
        </div>
    );
};

export default Sidebar;
