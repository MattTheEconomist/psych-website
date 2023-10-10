import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FAQ from './components/FAQ';
import TherapyTypes from './components/therapyTypes';
import Layout from './components/Layout'; // Import the Layout component

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
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;
