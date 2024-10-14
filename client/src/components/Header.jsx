import React, { useState } from 'react'
import './Header.css';
import toggle from './burger-menu-svgrepo-com.svg'

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
       <div className='bg-gray-500'>
          <img src={toggle} alt="" className='w-5'/>
       </div>
    );
};

export default Header;