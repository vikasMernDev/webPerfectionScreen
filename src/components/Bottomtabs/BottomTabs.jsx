// src/components/BottomTabs.js
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './BottomTabs.css';

const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // Initial active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="bottom-tabs">
      <div
        className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
        onClick={() => handleTabClick('tab1')}
      >
        <Link to ={'/'}> Screen1 </Link>
      </div>
      <div
        className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
        onClick={() => handleTabClick('tab2')}
      >
        <Link to ={'/scren2'}> Screen2 </Link>
      </div>
      <div
        className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
        onClick={() => handleTabClick('tab3')}
      >
        <Link to ={'/scren3'}> Screen3 </Link>
      </div>
      <div
        className={`tab ${activeTab === 'tab4' ? 'active' : ''}`}
        onClick={() => handleTabClick('tab4')}
      >
        <Link to ={'/scren4'}> Screen4 </Link>
      </div>
    </div>
  );
};

export default BottomTabs;
