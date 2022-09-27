/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home/home";
import AboutUs from "./pages/about_us";
import Overview from "./pages/hc_overview/overview";
import Events from "./pages/events/events";
import Classes from "./pages/classes/classes";
import FAQ from "./pages/faq";
import GetConnected from "./pages/get_connected/get_connected";
import Navbar from "./pages/navbar/navbar";
import Footer from "./pages/footer/footer";
import WhatWeDo from "./pages/what_we_do/what_we_do";
import Leadership from "./pages/leadership/leadership";
import SummerHC from "./pages/summer_hc/summer_hc";
import Anatolia from "./pages/hc_pages/anatolia/anatolia";
import CentralJapan from "./pages/hc_pages/central japan/central_japan";
import CMU from "./pages/hc_pages/cmu/cmu";
import Laos from "./pages/hc_pages/laos/laos";
import Manado from "./pages/hc_pages/manado/manado";
import Mongolia from "./pages/hc_pages/mongolia/mongolia";
import Lahu from "./pages/hc_pages/lahu/lahu";
import NAHC from "./pages/hc_pages/nahc/north_africa";
import PhnomPenh from "./pages/hc_pages/phnom_penh/phnom_penh";
import SiemReap from "./pages/hc_pages/siem_reap/siem_reap";
import Tunisia from "./pages/hc_pages/tunisia/tunisia";
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
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/summer_house_church" element={<SummerHC />} />
          <Route path="/events" element={<Events />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/get_connected" element={<GetConnected />} />
          <Route path="/anatolia" element={<Anatolia />} />
          <Route path="/central_japan" element={<CentralJapan />} />
          <Route path="/cmu" element={<CMU />} />
          <Route path="/laos" element={<Laos />} />
          <Route path="/manado" element={<Manado />} />
          <Route path="/mongolia" element={<Mongolia />} />
          <Route path="/lahu" element={<Lahu />} />
          <Route path="/north_africa" element={<NAHC />} />
          <Route path="/phnom_penh" element={<PhnomPenh />} />
          <Route path="/siem_reap" element={<SiemReap />} />
          <Route path="/tunisia" element={<Tunisia />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
