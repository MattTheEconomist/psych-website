

import React from 'react';
import styles from "./explanation.module.css"


function Explanation(){

    return(
        <>
        <div className={styles.titleContainer}>About Us</div>
        <div className={styles.subtextAndPicture}> 
        <div className={styles.subtextContainer}>
            We strive to always provide the highest quality mental healthcare. We also provide psychological and educational consultation and support to families, schools, and organizations based in the Washington, DC metro area, nation-wide, and abroad. We also provide psychological and educational consultation and support to families, schools, and organizations based in the Washington, DC metro area, nation-wide, and abroad. 
            <br/>
            <br/>
      
                Our approach to therepy is blah blah blah. We create a warm atmosphere for people so they can talk about things.  We create a warm atmosphere for people so they can talk about things.  We create a warm atmosphere for people so they can talk about things.  We create a warm atmosphere for people so they can talk about things. 


         </div>
        <div className={styles.pictureContainer}> picture here</div>
        </div>

        <div className={styles.titleContainer}>We Treat</div>
        <ul className={styles.treatmentList}>
            <li>Anxiety</li>
            <li>Obsessisve Compulsive Disorder</li>
            <li>Depression</li>
            <li>Fear of Aluminum Foil</li>
            <li>Crazy Lady Baby Syndrome (CLBS)</li>
            <li>Husband Tolerance</li>
        </ul>

        <div class={styles.buttonContainer}>

    <a href="/faq" class={styles.button}>Frequently Asked Questions</a>
    <a href="/practitioners" class={styles.button}>Our Practitioners</a>
    <a href="/therapy-types" class={styles.button}>Our Approach to Therepy</a>
    <a href="/blog" class={styles.button}>Blog</a>
  </div>



        
        </>
    )
}

export default Explanation; 