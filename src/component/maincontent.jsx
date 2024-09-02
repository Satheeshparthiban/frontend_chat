import React, { useState } from 'react';

function MainContent({ searchQuery, setSearchQuery }) {
  const [modelVersion, setModelVersion] = useState('MODEL');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const content = [
    'Welcome to My Website',
    
  ];

  const filteredContent = content.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleModelChange = (model) => {
    setModelVersion(model);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="flex-grow relative p-8 bg-gray-800 text-gray-200">
      {/* Model Switcher Dropdown positioned at the top-left */}
      <div className="absolute top-4 left-4">
        <div
          className="relative flex-col"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <button className="bg-gray-700 text-white p-2 rounded flex items-center">
            {modelVersion}
            <svg
              className="w-4 h-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <ul className="absolute mt-2 w-full bg-gray-700 border border-gray-600 rounded shadow-lg">
              {['MISTRAL', 'LLAMA'].map((model) => (
                <li
                  key={model}
                  className="p-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => handleModelChange(model)}
                >
                  {model}
                </li>
              ))}
            </ul>
          )}
         </div>
      </div>
      
       <div className="absolute top-5 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-2xl font-bold text-gray-100">Your Heading</h1>{/*center heading*/}
      </div>
      
      <div className="absolute top-5 right-4">
        <img
          src="src\image\loco.png" 
          alt="Logo"
          className="w-15 h-10 object-contain"
        />
      </div>
       
      <div className="h-full overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4 pt-10">Main Content</h1>
        {filteredContent.length > 0 ? (
          filteredContent.map((item, index) => (
            <p key={index} className="mb-2">
              {item}
            </p>
          ))
        ) : (
          <p>No results found for "{searchQuery}".</p>
        )}
      </div>

      {/* Search box positioned at the bottom */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-700 shadow-lg">
        <div className="flex">
          <input
            type="text"
            className="w-full p-2 bg-gray-600 text-gray-200 border border-gray-600 rounded-l"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <button
            className="bg-gray-800 text-white p-2 rounded-r hover:bg-gray-600"
            onClick={() => alert('Searching for: ' + searchQuery)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
