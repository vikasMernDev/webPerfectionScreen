// src/components/SideMenu.js
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './sideMenu.css';

const SideMenu = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // Initial active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="side-menu">
    <div
      className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
      onClick={() => handleTabClick('tab1')}
    >
      <Link to ={'/scren5'}> Screen5 </Link>
    </div>
    <div
      className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
      onClick={() => handleTabClick('tab2')}
    >
      <Link to ={'/scren6'}> Screen6 </Link>
    </div>
    <div
      className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
      onClick={() => handleTabClick('tab3')}
    >
      <Link to ={'/scren7'}> Screen7 </Link>
    </div>
  </div>
  );
};

export default SideMenu;
