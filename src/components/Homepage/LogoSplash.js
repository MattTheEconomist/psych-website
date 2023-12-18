import React, { useState, useEffect } from 'react';
import styles from "./logosplash.module.css"

import MentalIcon from "./mental"
function LogoSplash(){
    const [opacity, setOpacity] = useState(1); // Initial opacity

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const maxScroll = 250;
        const newOpacity = 1 - (scrollPosition / maxScroll);
  
        setOpacity(newOpacity);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []); 



    return (<>
<div className={styles.logoSplashContainer}>

    <div className={styles.logoAndSubtext} style={{opacity: opacity}}>
        <div className={styles.logoSubtext}>Welcome to</div>
        <div className={styles.logoTextContainer}>Capital Therepy Group</div>
        </div>
    
</div>

<div className={styles.reachoutContainer}>
    <div className={styles.reachoutTitleContainer}> 
    <h3 className={styles.reachoutTitle}>Evidence-based Therepy </h3>
    <h3 className={styles.rechoutSubtext}>customized to fit the needs of every client</h3>
    </div>


<div className={styles.iconContainer}>

      <MentalIcon />

</div>


</div>

<div class={styles.splashBottomSpacer}>


     <div className="shapeDividerContainer">
 <svg className={styles.svgDivider} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" 
        fill="#45b3e0"

        ></path>
    </svg> 
</div> 


</div>
    </>
    )
}

export default LogoSplash