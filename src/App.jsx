
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider } from "./i18n/LangContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import SubsidyPage from "./pages/SubsidyPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function AppLayout() {
  return (
    <div className="app-shell site-app-wrapper">
      <ScrollToTop />

      <Navbar />

      <main className="main-content main-content-flow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/subsidy" element={<SubsidyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <BrowserRouter basename="/fuselagemh">
          <AppLayout />
        </BrowserRouter>
      </LangProvider>
    </ThemeProvider>
  );
}
