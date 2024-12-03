import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./components/home";

import CurrentListings from "./pages/Buying/CurrentListings";
import HomeSearch from "./pages/Buying/HomeSearch";
import LakeInfoGuide from "./pages/Buying/LakeInfoGuide";

import HomeValuation from "./pages/Selling/HomeValuation";
import OurMarketingPlan from "./pages/Selling/OurMarketingPlan";
import PreparingYourHome from "./pages/Selling/PreparingYourHomeForSale";
import RecentlySold from "./pages/Selling/RecentlySold";

import Listing from "./pages/Listing";
import Properties from "./pages/Properties";
import ResourceGuide from "./pages/Resource";
import Agents from "./pages/Agents";
import About from "./pages/About";

import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buying/currentlistings" element={<h1>Test Page</h1>} />
            <Route path="/buying/currentlistings" element={<CurrentListings />} />
            <Route path="/buying/homesearch" element={<HomeSearch />} />
            <Route path="/buying/lakeinfoguides" element={<LakeInfoGuide />} />

            <Route path="/selling/recentlysold" element={<RecentlySold />} />
            <Route path="/selling/ourmarketingplan" element={<OurMarketingPlan />} />
            <Route path="/selling/preparingyourhomeforsale" element={<PreparingYourHome />} />
            <Route path="/selling/homevaluation" element={<HomeValuation />} />

            <Route path="/ourlistings" element={<Listing />} />
            <Route path="/waterfronthomes" element={<Properties />} />
            <Route path="/resourceguide" element={<ResourceGuide />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/contactus" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
