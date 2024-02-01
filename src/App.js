import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import AboutUs from "./pages/AboutUs";
import CodeOfConduct from "./pages/CodeOfConduct";
import Celebrations from "./pages/Celebrations";
import Donate from "./pages/Donate";
import OurFacilities from "./pages/OurFacilities";
import Tariff from "./pages/Tariff";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs/>} />
          <Route path="codeofconduct" element={<CodeOfConduct/>} />
          <Route path="celebrations" element={<Celebrations/>} />
          <Route path="donate" element={<Donate/>} />
          <Route path="ourfacilities" element={<OurFacilities/>} />
          <Route path="tariff" element={<Tariff/>} />
          <Route path="testimonials" element={<Testimonials/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
