import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideMenu from './components/sideMenu/SideMenu';
import BottomTabs from './components/Bottomtabs/BottomTabs';
import Screen1 from './components/Screens/Screen1';
import Screen2 from './components/Screens/Screen2';
import Screen3 from './components/Screens/Screen3';
import Screen4 from './components/Screens/Screen4';
import Screen5 from './components/Screens/Screen5';
import Screen6 from './components/Screens/Screen6';
import Screen7 from './components/Screens/Screen7';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import './App.css'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
    <div className="app">
          <div className="main-content">
          <SideMenu />
            <Routes>
              <Route path="/" element={<Screen1/>} />
              <Route path="/scren2" element={<Screen2/>} />
              <Route path="/scren3" element={<Screen3/>} />
              <Route path="/scren4" element={<Screen4/>} />
              <Route path="/scren5" element={<Screen5/>} />
              <Route path="/scren6" element={<Screen6/>} />
              <Route path="/scren7" element={<Screen7/>} />
            </Routes>
        </div>
    </div>
        <BottomTabs />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
