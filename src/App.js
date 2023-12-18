// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FAQ from './components/FAQ/FAQ';
import Therepy from './components/Therepy/Therepy';
import Layout from './components/Layout'; 
import Practitioners from './components/Practitioners/Practitioners'; 
import Blog from './components/Blog/Blog'; 
import Homepage from './components/Homepage/Homepage';
import Testing from './components/Testing/Testing';

function App() {
  return (
  
    <Router>
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/therepy" element={<Therepy />} />
        <Route path="/practitioners" element={<Practitioners />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;
