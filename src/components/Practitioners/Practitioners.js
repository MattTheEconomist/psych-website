import React from 'react';
import styles from "./practitioners.module.css"

function Practitioners(){

     const specList =[
          'Anxiety',
          'Stress and Trauma',
          'OCD (Obsessive Compulsive Disorder)',
          'Depression',
          'Specific Phobia',
     ]

     const credList =[
          'George Washington University, PhD', 
          'SPACE training', 
          'Licensed in: Maryland, Virginia, DC, New York', 
          'Catherine puts her licensen number here, do you want that?', 

     ]

return(
     <>
     <div className={styles.headerSpacer}></div>
     <div className={styles.titleAreaContainer}>


     <div className={styles.practitionersTitle}>Our Practitioners</div>
     <div className={styles.doctorName}>Dr. Maria Ashford, PhD </div>
     <div className={styles.doctorRole}>Clinical Director, CEO, Czar </div>
     </div>
     <div class="shapeDivider">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={styles.topDivider}>
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" fill="#45b3e0"></path>
    </svg>
</div>
     <div className={styles.textAndPicContainer}>
          <div className={styles.doctorText}>
               Dr Maria Ashford earned her Ph.D from George Washington University. She is an incredibly talented psychologist. While she is exceedingly humble about her abilities, she provides a warm atmosphere for her clients to open up. Maria has a fantastic track record of success. 
               <br/>
               <br/>
               While her thereputic prowess is indisuputable, she really excels in choosing a husband. I mean not only is this guy good looking, but he's really smart too! He made this entire shitty website. Not to put too fine a point on it, but this guy is the full package. I'm unsure of what else to put in this paragraph except to reiterate that matt is really great. 
               <br/>
               <br/>
               I think it would be great to put a 3rd paragraph here to fill out the space. in this paragraph i would suggest resisting the urge to describe how great matt is. But honestly am i asking too much? I mean its pretty hard to write so much withotu even mentioning how grat matt is once. Here's a sentence I'm going to copy and paste a few times.  Here's a sentence I'm going to copy and paste a few times.  Here's a sentence I'm going to copy and paste a few times.  Here's a sentence I'm going to copy and paste a few times. 
             

          </div>
          <div className={styles.doctorImage}> Picture of my wife. Arms folded, leaning against a wall on her shoulder. big smile. about to do some therepy </div>
           </div>

           <div class="shapeDivider">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" fill="#f3fafd"></path>
    </svg>
    </div>

           <div className={styles.specialtiesAndCredsContainer}>
           <div className={styles.specialtiesContainer}> 
           <ul className={styles.listOfStuff}>
               <h3 className={styles.listHeader}>Specialties</h3>
           {specList.map(el=><li>{el}</li>)}
           </ul>

           </div>
           <div className={styles.creds}>
           <ul className={styles.listOfStuff}>
           <h3 className={styles.listHeader}>Credentials</h3>
           {credList.map(el=><li>{el}</li>)}
           </ul>
                </div>

           </div>
   
           






</>

)
}


export default Practitioners

