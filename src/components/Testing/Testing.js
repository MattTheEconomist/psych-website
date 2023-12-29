import React from 'react'; 
import styles from "./testing.module.css"

import Wave from "../Wave"

import IconAccuracy from './IconAccuracy';
import IconFail from './IconFail';
import AllCards from './AllCards';

function Testing (){

    return (<>

<div className={styles.headerSpace}></div>
   <div className={styles.titleAreaContainer}>

<div className={styles.titleTextContainer}>Testing</div>
   </div>

<div className={styles.reachoutContainer}>

<div className={styles.textContainer}>
<h3 className={styles.reachoutTitle}> Get Accurate Diagnoses</h3>
<h3 className={styles.reachoutSubtext}> to match your symptoms to mental disorders</h3>




</div>




<div className={styles.iconContainer}>
    <IconAccuracy />
</div>
</div>
<div class="shapeDivider">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={styles.topDivider}>
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" fill="#45b3e0"></path>
    </svg>
</div>
{/* <div className="shapeDivider">
   <Wave topColor ="#45b3e0"/> 
   </div> */}

   <div className={styles.content}> 



<div className={styles.contentText}>
  <h3 className={styles.contextTitle}>Assessment is more Important than Ever Before</h3>
               <br/>
               <br/>
               Psychological testing has come a long way from merely assessting intelligence.  Today, assessments are used in everything from private school admissions and test accommodation to validation of symptoms before medication can be prescribed. 
               <br/>
               <br/>
          
               For those struggling with challenges such as ADHD, dyslexia, or anxiety, psychological testing can be an absolute necessity. By pinpointing their specific learning needs and cognitive strengths, it opens the door to targeted interventions and test accommodations. This empowers individuals to reach their full potential in the workplace or academia. 

               <br/>
               <br/>
               There is more to psychological assessment than reading the results.
               An answer might appear normal on paper, but our practitioners can discern underlying anxieties, cultural influences, or unspoken vulnerabilities based on subtle cues and patterns.



          </div>

          <div className={styles.iconContainerFail}>
            
          <IconFail/>


           
             </div>
          </div>
     

        <Wave topColor= "#f3fafd"/> 

        <AllCards /> 

        {/* <div className={styles.outerBorder}> 

        <div className={styles.testingListContainer}>
          We provide testing for:
          <ul>
           <li>ADHD</li> 
           <li>Autism</li> 
           <li>Neuro-Psych</li> 
           <li>Private School Admissions</li> 
           <li>etc? </li> 


          </ul>

        </div>
        </div> */}




    
    </>)
}

export default Testing; 



