/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home";
import AboutUs from "./pages/about_us";
import HouseChurch from "./pages/house_church";
import Events from "./pages/events";
import Classes from "./pages/classes";
import FAQ from "./pages/faq";
import GetConnected from "./pages/get_connected";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer/footer";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/house_church" element={<HouseChurch />} />
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
ReactDOM.render(<App />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
