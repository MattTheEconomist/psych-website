

import React from 'react';
import styles from "./explanation.module.css"
import PsychIcon from './PsychIcon';
import ButtonArea from './ButtonArea';
import TherepistIcon from './TherepistIcon';
import TestingIcon from './TestingIcon';
import QuestionIcon from './QuestionIcon';
import BrainIcon from './BrainIcon';


function Explanation(){

    return(
        <>
        <div className={styles.topSectionContainer}>
        <div className={styles.titleContainer}>Our Approach</div>
        <div className={styles.subtextAndPicture}> 
        <div className={styles.subtextContainer}>
            We strive to always provide the highest quality mental healthcare. We also provide psychological and educational consultation and support to families, schools, and organizations based in the Washington, DC metro area, nation-wide, and abroad. We also provide psychological and educational consultation and support to families, schools, and organizations based in the Washington, DC metro area, nation-wide, and abroad. 
            <br/>
            <br/> 
                Our approach to therepy is blah blah blah. We create a warm atmosphere for people so they can talk about things.  We create a warm atmosphere for people so they can talk about things.  We create a warm atmosphere for people so they can talk about things.  We create a warm atmosphere for people so they can talk about things. 


         </div>
        <div className={styles.pictureContainer}> 
        <PsychIcon />

        </div>
        </div>
        </div>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" 
        fill="#f3fafd"
        ></path>
    </svg>

        <div className={styles.titleContainer}>Our Specialties</div>
        <ul className={styles.treatmentList}>
            <li>Anxiety</li>
            <li>Obsessisve Compulsive Disorder</li>
            <li>Depression</li>
            <li>Fear of Aluminum Foil</li>
            <li>Crazy Lady Baby Syndrome (CLBS)</li>
            <li>Husband Tolerance</li>
        </ul> 

        <div class={styles.allButtonsAreaContainer}>

            <ButtonArea desc="meet our experts" 
            icon= {TherepistIcon}
             buttonText="Our Practitioners" linkAddress="practitioners" />

<ButtonArea desc="learn about our services" 
            icon= {BrainIcon}
             buttonText="Our Services" 
             linkAddress="therepy-types" />


<ButtonArea desc="learn about our testing" 
            icon= {TestingIcon}
             buttonText="Testing" 
             linkAddress="therepy-types" />

<ButtonArea desc="frequently asked questions" 
        icon= {QuestionIcon}
             buttonText="FAQ" 
             linkAddress="faq" />

    {/* <a href="/practitioners" class={styles.button}>Our Practitioners</a>
    <a href="/therapy-types" class={styles.button}>Services</a>
    <a href="/therapy-types" class={styles.button}>Testing</a>
    <a href="/faq" class={styles.button}>Frequently Asked Questions</a>
    <a href="/blog" class={styles.button}>Blog</a> */}
  </div>



        
        </>
    )
}

export default Explanation; 