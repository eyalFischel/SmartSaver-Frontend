import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Income from './pages/income';
import Expenses from './pages/expenses';
import FooterNavBox from './components/footer-nav-box';

function App() {
  return (
    <div className={'bg-gradient-to-r from-[#4f46e5] to-[#d8b4fe] h-screen'}>
      <main className="max-w-[1676px] w-full mx-auto pt-[40px] h-full flex flex-col pb-[40px]">
        <nav>
          <a href="https://maakaf-landing-page.netlify.app/" target="_blank" rel="noreferrer"><img src="/img/maakaf.png" className={'w-16 h-16'} alt="לאתר מעקף"></img></a>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
        <footer className="grid grid-cols-3 gap-4 justify-items-center w-fit mx-auto">
          <FooterNavBox routerPage={'main'} title={'עמוד ראשי'}><img src="/img/stats.png" alt="" /></FooterNavBox>
          <FooterNavBox routerPage={'income'} title={'הכנסות'}><img src="/img/savings.png" alt="" /></FooterNavBox>
          <FooterNavBox routerPage={'expenses'} title={'הוצאות'}><img src="/img/expenses.png" alt="" /></FooterNavBox>
        </footer>
      </main>
    </div>
  );
}

export default App;
