import React from 'react';
import styles from "./logosplash.module.css"

function LogoSplash(){

    const svgString = `<svg id="visual" viewBox="0 0 600 900" width="600" height="900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="600" height="900" fill="#007bff"></rect><g transform="translate(289.6951823546948 456.4207229382424)"><path d="M185.3 -106.2C228.6 -32 244.2 59 208.7 123.3C173.2 187.7 86.6 225.3 4 223C-78.5 220.7 -157 178.3 -189.5 115.7C-222 53.2 -208.4 -29.7 -169.2 -101.5C-129.9 -173.3 -65 -234.2 3 -235.9C71 -237.7 142 -180.3 185.3 -106.2" fill="#FFFFFF"></path></g></svg>`;

    // Remove namespace tags using regular expressions
    const cleanedSvgString = svgString.replace(/xmlns(.+?:)?"(.+?)"/g, '');

    return (<>
    <div className={styles.headerSpacer}></div>
<div className={styles.logoSplashContainer}>

    <div className={styles.logoAndSubtext}>
        <div className={styles.logoTextContainer}>Capital Therepy Group</div>
        <div className={styles.logoSubtext}>Top quality virtual mental healthcare, serving DC, Maryland, and Virginia. Here's another sentence just to fill out the space</div>
        </div>


        <div className={styles.blobContainer}>
            

<svg id="visual" viewBox="600 0 900 600" width="600" height="200"  version="1.1"><rect x="0" y="0" width="900" height="600" fill="#007bff"></rect><g fill="#FFFFFF"><circle r="139" cx="392" cy="159"></circle><circle r="52" cx="694" cy="377"></circle><circle r="71" cx="305" cy="517"></circle></g></svg>
      </div>
 

    
</div>
<div className={styles.splashBottomSpacer}></div>


<div class={styles.splashBottomSpacer}>
    {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" fill="#007bff"></path>
    </svg> */}

    <div class="custom-shape-divider-top-1700144388">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" fill="#007bff"></path>
    </svg>
</div>
</div>
    </>
    )
}

export default LogoSplash