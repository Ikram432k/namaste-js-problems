// Tab Switcher
//problem statement link below
// https://namastedev.com/practice/tab-switcher

import React, { useState } from 'react';

// Sample tab data
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
  // TODO: Set up state to track the active tab
  const defaultTab = tabs.find(tab => tab.id === 'home') || tabs[0];
  const [activeTab, setActiveTab] = useState(defaultTab);
  const tabSelecter = (selectedTab) => {
    setActiveTab(selectedTab)
  }
  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>

      {/* Tab buttons */}
      <div className="tab-buttons">
        {/* TODO: Render buttons for each tab */}
        {/* Use data-testid={`tab-button-${tab.id}`} for each button */}
        {tabs.map(ele => (
          <button className={activeTab.id == ele.id ? "active" : ""} data-testid={`tab-button-${ele.id}`} onClick={()=>{tabSelecter(ele)}}>{ele.label}</button>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content" data-testid="tab-content">
        {/* TODO: Show content of the currently active tab */}
        {activeTab.content ? 
          <p>{activeTab.content}</p> : ""
        }
      </div>
    </div>
  );
}
