// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ProductTable from './components/ProductTable';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <ProductTable />
      </div>
    </div>
  );
}

export default App;
