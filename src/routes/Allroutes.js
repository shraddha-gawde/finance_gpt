import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.js";
import Stocks from "../pages/Stocks.js";
import FinanceNews from "../pages/FinanceNews.js";
import Analysis from "../pages/Analysis.js";
import Error from "../pages/Error.js";
import StockDetail from "../pages/StockDetails.js";
import Askai from "../pages/Askai.js";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/finance-news" element={<FinanceNews />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="*" element={<Error />} />
        <Route path="/stocks/detail/:stockId" element={<StockDetail />} />
        <Route path="/ask-ai" element={<Askai />} />
        
      </Routes>
    </div>
  );
};

export default Allroutes;
