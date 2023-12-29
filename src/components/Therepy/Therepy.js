import React from 'react';
import styles from "./services.module.css"
import Wave from "../Wave"
import IconHome from './IconHome';
import IconOnline from './IconOnline';
import AllCards from './AllCards';


function Therepy() {
  return (
   <>
   <div className={styles.headerSpace}></div>
   <div className={styles.titleAreaContainer}>

<div className={styles.titleTextContainer}>Online Therepy</div>
   </div>

<div className={styles.reachoutContainer}>

<div className={styles.textContainer}>
<h3 className={styles.reachoutTitle}> Expert Mental Healthcare</h3>
<h3 className={styles.reachoutSubtext}> from the comfort of your own home</h3>
</div>



<div className={styles.iconContainer}>
<IconHome />
</div>
</div>
<div class="shapeDivider">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={styles.topDivider}>
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" fill="#45b3e0"></path>
    </svg>
</div>


   <div className={styles.content}> 



<div className={styles.contentText}>
  <h3 className={styles.contextTitle}>Convenient Help at your Fingertips</h3>
               <br/>
               <br/>
               Imagine a world where seeking help for your mental well-being is as convenient as ordering groceries or booking a flight. Online therapy has made that world a reality, revolutionizing the way we access mental healthcare. No longer are geographic barriers, time constraints, or social anxieties obstacles to getting the support you need. With a few clicks, you can connect with a licensed therapist from the comfort and privacy of your own home, opening doors to a healthier and happier you.
               <br/>
               <br/>
          
               Online therapy isn't just about convenience; it's about empowering individuals to prioritize their mental well-being. It's a testament to the power of technology and its ability to bridge gaps, democratize access, and unlock a world of possibilities for mental health support. So, take a step towards a healthier you, click on that virtual door, and discover the transformative power of online therapy.






             

          </div>

          <div className={styles.iconContainerOnline}>
            <IconOnline /> </div>

          </div>
     

        <Wave topColor= "#f3fafd"/> 

        <div className={styles.statesContainer}>
          We are currently accepting patients for online care who reside in:
          <ul>
           <li>DC</li> 
           <li>Maryland</li> 
           <li>Virginia, or</li> 
           <li>New York</li> 


          </ul>

          {/* <h2>Insert outlines of states here??</h2> */}
        </div>



<AllCards /> 



  
   </>
  );
}

export default Therepy;