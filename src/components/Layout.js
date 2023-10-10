import React from 'react';
import Header from './header'; // Import the Header component
import Footer from './Footer'; // Import the Footer component

function Layout({ children }) {
  return (
    <div>
      <Header /> {/* Include the Header component */}
      {children} {/* This is where the content of child components will be rendered */}
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default Layout;