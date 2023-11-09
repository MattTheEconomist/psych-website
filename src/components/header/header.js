import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import styles from './header.module.css'; 

function Header() {

  const [isHeaderShrunk, setIsHeaderShrunk] = React.useState(false); // State variable to track header state

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsHeaderShrunk(true); // Update state when scrolled down
    } else {
      setIsHeaderShrunk(false); // Update state when scrolled up
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);


  return ( <>        
    
    <div className={`${styles.header} ${isHeaderShrunk ? styles.shrink : ''}`}>

      <div className={styles.logoContainer}>
        <div className={` ${styles.logo}`}>
            <Link to="/">Capital Therepy Group</Link>
              </div>
      </div>

      <div className={styles.allLinksContainer}>


      <div className={styles.linkContainer}>
            <Link to="/faq">FAQ</Link>
            </div>

          <div className={styles.linkContainer}>
            <Link to="/therapy-types">Therapy Types</Link>
            </div>
            
            <div className={styles.linkContainer}>
            <Link to="/practitioners">Practitioners</Link>
            </div>
 
          <div className={styles.linkContainer}>
            <Link to="/blog">Blog</Link>
            </div>



      </div>


     




    </div>
    </>

  );
}

export default Header;