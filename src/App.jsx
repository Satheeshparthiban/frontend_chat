import React, { useState } from 'react';
import Navbar from './component/Navbar';
import MainContent from './component/maincontent';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex min-h-screen">
      <Navbar />
      <MainContent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
}

export default App;
