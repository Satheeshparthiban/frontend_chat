import React from 'react';

function Navbar() {
  return (
    <div className="w-64 h-screen bg-gray-700 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold">
        My Website
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          <li>
            <a href="#home" className="block p-2 hover:bg-gray-500 rounded">NEW CHAT</a>
          </li>
          <li>
            <a href="#about" className="block p-2 hover:bg-gray-500 rounded">CHAT 1</a>
            <a href="#services" className="block p-2 hover:bg-gray-500 rounded">CHAT 2</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
