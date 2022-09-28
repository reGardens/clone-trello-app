import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;