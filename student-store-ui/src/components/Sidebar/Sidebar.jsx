import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`sidebar fixed left-0 h-full z-50 bg-green-100 p-4 transition-all ${
        isOpen ? 'w-96' : 'w-20'
      }`}
    >
      <div className='w-full h-20 felx justify-center items-end'>
        <button
          className='toggle-button bg-gray-500 text-white py-2 px-4 rounded mb-4'
          onClick={toggleSidebar}
        >
          {isOpen ? '<' : '>'}
        </button>
      </div>
      <div className='sidebar-content'>
        {/* Contenido de la barra lateral */}
      </div>
    </div>
  );
};

export default Sidebar;