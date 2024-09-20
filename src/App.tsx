import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Income from './pages/income';
import Expenses from './pages/expenses';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Framework!!!!
      </h1>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </>
  );
}

export default App;
