import React, { useState } from 'react';

function Sidebar() {
  // Sử dụng useState để quản lý trạng thái mở/đóng của sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Hàm mở sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  // Hàm đóng sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      {/* Nút để mở sidebar */}
      <button onClick={openSidebar}>Open Sidebar</button>

      {/* Sidebar */}
      <div
        id="mySidebar"
        style={{
          display: isSidebarOpen ? 'block' : 'none',
          width: '250px',
          height: '100%',
          position: 'fixed',
          zIndex: '1',
          top: '0',
          left: '0',
          backgroundColor: '#111',
          overflowX: 'hidden',
          paddingTop: '60px',
          color: 'white',
        }}
      >
        <a href="#" onClick={closeSidebar} style={{ color: 'white' }}>
          Close Sidebar
        </a>
        <a href="#" style={{ color: 'white' }}>Link 1</a>
        <a href="#" style={{ color: 'white' }}>Link 2</a>
        <a href="#" style={{ color: 'white' }}>Link 3</a>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          id="myOverlay"
          onClick={closeSidebar}
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: '0',
          }}
        ></div>
      )}
    </div>
  );
}

export default Sidebar;
