import React from 'react';
import Header from './header/header'; 
import Footer from './footer/Footer'; 

import styles from './layout.module.css'; 



function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>

  );
}

export default Layout;