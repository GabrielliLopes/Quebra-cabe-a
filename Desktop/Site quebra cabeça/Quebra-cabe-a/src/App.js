import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';
import ClientGallery from './pages/ClientGallery';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Header />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path="/portfolio/:category" element={<CategoryPage />} />
        <Route path="/portfolio/:category/:client" element={<ClientGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
