import React, { useState,useEffect } from 'react'
import Sidebar from './Sidebar';
import Item from './Item';
import logo from './warehouse-solid.svg'

const Header = ({ LoggedIn, setLoggedIn, openLogin, setopenLogin }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);


    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };

    const handleLogin = () => {
        if (!LoggedIn) {
            setopenLogin(true)
        }
        else{
            setLoggedIn(false)
            localStorage.removeItem('token');
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true); 
            setopenLogin(false); 
        }
    }, [setLoggedIn, setopenLogin]);

    return (
        <div className=''>
            <div className='flex'>
                <div className="sidebar-section min-h-screen">
                    <img src={logo} className='invert w-1/3 mx-auto' />
                    <h2 className='font-bold text-2xl text-white mb-10'>WareHouse Management </h2>
                    <Sidebar onSelectItem={handleSelectItem} />
                    <button onClick={handleLogin} className=' cursor-pointer p-2  bg-[#DA8E42] px-10 rounded-3xl mt-10 text-white font-bold'>{LoggedIn ? "Logout" : "Login"}</button>
                </div>
                <Item selectedItem={selectedItem} />
            </div>
        </div>
    );
};

export default Header;