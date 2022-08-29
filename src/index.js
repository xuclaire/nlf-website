/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';
import AboutUs from './pages/about_us';
import Overview from './pages/hc_overview/overview';
import Events from './pages/events/events';
import Classes from './pages/classes/classes';
import FAQ from './pages/faq';
import GetConnected from './pages/get_connected/get_connected';
import Navbar from './pages/navbar/navbar';
import Footer from './pages/footer/footer';
import WhatWeDo from './pages/what_we_do/what_we_do';
import SummerHC from './pages/summer_hc/summer_hc';
// import { FooterContainer } from './containers/footer'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/what_we_do" element={<WhatWeDo />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/summer_house_church" element={<SummerHC />} />
          <Route path="/events" element={<Events />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/get_connected" element={<GetConnected />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
