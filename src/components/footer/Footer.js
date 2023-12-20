import React from 'react';
import styles from './footer.module.css'; 





function Footer() {
  return (
    <>



<div className={styles.wavesContainer}> 

<svg 
  className={styles.svgWaves} 
 id="visual" 
 
 viewBox="0 0 900 450"
  xmlns="http://www.w3.org/2000/svg" 
 version="1.1"
 preserveAspectRatio="none"
 >
  
  {/* <rect x="0" y="0" width="900" height="450" fill="#FFFFFF" preserveAspectRatio="none"></rect> */}
<path d="M0 371L30 366C60 361 120 351 180 346.7C240 342.3 300 343.7 360 351.7C420 359.7 480 374.3 540 380.2C600 386 660 383 720 378C780 373 840 366 870 362.5L900 359L900 451L870 451C840 451 780 451 720 451C660 451 600 451 540 451C480 451 420 451 360 451C300 451 240 451 180 451C120 451 60 451 30 451L0 451Z" fill="#c9e9f6"></path><path d="M0 395L30 391.3C60 387.7 120 380.3 180 382.2C240 384 300 395 360 398.7C420 402.3 480 398.7 540 397C600 395.3 660 395.7 720 397.8C780 400 840 404 870 406L900 408L900 451L870 451C840 451 780 451 720 451C660 451 600 451 540 451C480 451 420 451 360 451C300 451 240 451 180 451C120 451 60 451 30 451L0 451Z" fill="#8eceea"></path><path d="M0 413L30 412C60 411 120 409 180 408C240 407 300 407 360 411C420 415 480 423 540 426.8C600 430.7 660 430.3 720 427.5C780 424.7 840 419.3 870 416.7L900 414L900 451L870 451C840 451 780 451 720 451C660 451 600 451 540 451C480 451 420 451 360 451C300 451 240 451 180 451C120 451 60 451 30 451L0 451Z"
 fill="#45b3e0"></path></svg>
</div>

        
  <div className={styles.footerContainer}>
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.contact}>
                    <div className={styles.email}>client_help@capitaltherepygroup.com</div>
                    <div className={styles.email}>|</div>
                    <div className={styles.phone}>(123) 456-7890</div>
                </div>
            </div>
        </div>
    </div> 


    </>

  );
}

export default Footer;

