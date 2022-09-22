import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound/NotFound';
import React from 'react';
import Header from 'components/Header/Header';
import LoginPage from 'pages/Login/LoginPage';
import AboutPage from './pages/About/About';
import ShopPage from './pages/Shop/Shop';
import BagPage from 'pages/Bag/Bag';
import SellPage from 'pages/Sell/Sell';
import MainPage from 'pages/Main/Main';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/sell" element={<SellPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/bag" element={<BagPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
