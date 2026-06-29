import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Loader from './components/Loader/Loader';
import './index.css';

// Lazy load product pages
const Product1 = lazy(() => import('./components/Products/ProductPages/Product1'));
const Product2 = lazy(() => import('./components/Products/ProductPages/Product2'));
const Product3 = lazy(() => import('./components/Products/ProductPages/Product3'));
const Product4 = lazy(() => import('./components/Products/ProductPages/Product4'));
const Product5 = lazy(() => import('./components/Products/ProductPages/Product5'));
const Product6 = lazy(() => import('./components/Products/ProductPages/Product6'));
const Product7 = lazy(() => import('./components/Products/ProductPages/Product7'));
const Product8 = lazy(() => import('./components/Products/ProductPages/Product8'));
const Product9 = lazy(() => import('./components/Products/ProductPages/Product9'));
const Product10 = lazy(() => import('./components/Products/ProductPages/Product10'));
const Product11 = lazy(() => import('./components/Products/ProductPages/Product11'));
const Product12 = lazy(() => import('./components/Products/ProductPages/Product12'));
const Product13 = lazy(() => import('./components/Products/ProductPages/Product13'));
const Product14 = lazy(() => import('./components/Products/ProductPages/Product14'));
const Product15 = lazy(() => import('./components/Products/ProductPages/Product15'));
const Product16 = lazy(() => import('./components/Products/ProductPages/Product16'));
const Product17 = lazy(() => import('./components/Products/ProductPages/Product17'));
const Product18 = lazy(() => import('./components/Products/ProductPages/Product18'));
const Product19 = lazy(() => import('./components/Products/ProductPages/Product19'));
const Product20 = lazy(() => import('./components/Products/ProductPages/Product20'));

// Lazy load other secondary pages
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy/PrivacyPolicy'));
const Terms = lazy(() => import('./components/Terms/Terms'));

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/1" element={<Product1 />} />
            <Route path="/product/2" element={<Product2 />} />
            <Route path="/product/3" element={<Product3 />} />
            <Route path="/product/4" element={<Product4 />} />
            <Route path="/product/5" element={<Product5 />} />
            <Route path="/product/6" element={<Product6 />} />
            <Route path="/product/7" element={<Product7 />} />
            <Route path="/product/8" element={<Product8 />} />
            <Route path="/product/9" element={<Product9 />} />
            <Route path="/product/10" element={<Product10 />} />
            <Route path="/product/11" element={<Product11 />} />
            <Route path="/product/12" element={<Product12 />} />
            <Route path="/product/13" element={<Product13 />} />
            <Route path="/product/14" element={<Product14 />} />
            <Route path="/product/15" element={<Product15 />} />
            <Route path="/product/16" element={<Product16 />} />
            <Route path="/product/17" element={<Product17 />} />
            <Route path="/product/18" element={<Product18 />} />
            <Route path="/product/19" element={<Product19 />} />
            <Route path="/product/20" element={<Product20 />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
