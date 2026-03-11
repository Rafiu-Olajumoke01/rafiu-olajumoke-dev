import React, { useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import Top from '../Topbar/Top';
import Sidebar from '../sidebar/Sidebar';
import './layout.css';

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <div className='layout-main'>
      <Top
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={toggleSidebar}
      />
      <div className="layout-body">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />
        <div className="layout-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;