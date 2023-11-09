// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FAQ from './components/FAQ/FAQ';
import TherapyTypes from './components/therapyTypes/therapyTypes';
import Layout from './components/Layout'; 
import Practitioners from './components/Practitioners/Practitioners'; 
import Blog from './components/Blog/Blog'; 

function App() {
  return (
  
    <Router>
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<h2>Home Content</h2>}
        />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/therapy-types" element={<TherapyTypes />} />
        <Route path="/practitioners" element={<Practitioners />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;
