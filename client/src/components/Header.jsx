import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Item from './Item';
import logo from './warehouse-solid.svg';
import { Link, useNavigate } from "react-router-dom";

const Header = ({LoggedIn, setLoggedIn}) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);  
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();
    
    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };

    
    const handleLogin = () => {
        if (!LoggedIn) {
            navigate("/login")
        } else {
            setLoggedIn(false);
            localStorage.removeItem('token'); 
        }
    };

    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true); 
            navigate('/')
        }
    }, [setLoggedIn,LoggedIn]);

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
           
            <div className="sidebar-section bg-[#644536] p-5 md:min-h-screen w-full md:w-1/4 flex flex-col items-center">
                <img src={logo} className='invert w-20 mx-auto mb-6' alt="Warehouse Logo" />
                <h2 className="font-bold text-xl md:text-2xl text-white mb-10 text-center">Warehouse Management</h2>
                
                
                <Sidebar onSelectItem={handleSelectItem} />
            
                <button 
                    onClick={handleLogin} 
                    className="cursor-pointer mt-10 p-3 w-3/4 bg-[#DA8E42] rounded-full text-white font-bold transition-all duration-200 hover:bg-[#c57a34]"
                >
                    {LoggedIn ? "Logout" : "Login"}
                </button>
            </div>

           
            <div className="item-section flex-1 p-5">
                <Item selectedItem={selectedItem} />
            </div>
        </div>
    );
};

export default Header;
