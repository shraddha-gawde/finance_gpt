import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.js";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {
        /* <Route path="/stocks" element={<Stocks />} />
        <Route path="/stocks/detail/:stockId" element={<StockDetail />} />
        <Route path="/finance-news" element={<FinanceNews />} />/
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/ask-ai" element={<Askai />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
};

export default Allroutes;
