import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import ServicesDetailPage from "./pages/ServicesDetailPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import ContactUsPage from "./pages/ContactUsPage";
import NotFoundPage from "./pages/NotFoundPage";

import Layout from "./components/layout/Layout";

import "./App.scss";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout isMobile={isMobile} />}>
        <Route index element={<HomePage isMobile={isMobile} />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="serviceDetail" element={<ServicesDetailPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
