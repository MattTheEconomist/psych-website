

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
        Our therapy group welcomes you with a sense of calm and open support. We prioritize creating a safe space for shared experiences, free from judgment. Collaborative interactions and genuine connection foster an atmosphere where you can feel truly heard and understood. This warmth isn't merely a feel-good element; it's carefully cultivated to facilitate open communication and vulnerability, which are essential for growth and healing.
            <br/>
            <br/> 
            Beyond the welcoming environment, our group is firmly rooted in evidence-based practices. Our therapists are skilled in proven techniques like CBT and ACT, tailoring interventions to fit your individual needs. They equip you with practical tools for managing anxiety, reframing negative thoughts, and developing healthy coping mechanisms. This commitment to evidence ensures you receive effective support based on scientific understanding, not just well-meaning platitudes. Together, the supportive atmosphere and evidence-based approach create a powerful combination for personalized growth and lasting change. Whether you're seeking to manage specific challenges or simply explore personal development, our group offers a compassionate and empowering space to flourish.
               


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

<div className={styles.svgContainer}>
<svg viewBox="0 0 440 440" xmlns="http://www.w3.org/2000/svg"  height="700" width="700">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9EF0F0" stop-opacity="1" />
      <stop offset="100%" stop-color="#D0E2FF" stop-opacity="1" />
    </linearGradient>
  </defs><path d="M220,380.24885475014645C261.76853477178844,377.5126982979106,309.0495205552055,391.23607860885056,340.6735167850896,363.8130971596082C372.1660376641976,336.5041255299711,369.80887827101844,288.5926203808143,373.57092264992536,247.0786971154746C376.95980514055924,209.68259183287157,378.0527617335047,172.0413289954832,361.0877851105281,138.5429292870686C343.31485366398675,103.44917261308903,315.0708286741198,73.76859704148735,278.48248926842484,59.3206813015056C241.14782316393377,44.57805786410299,200.54016090320295,49.69571576734416,161.69451343611811,59.80699223541955C118.45896812320892,71.06093136147611,74.13708303627888,84.75963375347561,46.35020897705324,119.7432464081793C15.445818374587123,158.6518054588287,-3.0996297602793748,208.90083376844456,4.237751102010643,258.0447058990507C11.692545478393452,307.97498326488693,41.36134161051079,355.6630563773528,85.28863984735975,380.54274742516145C125.57557009442186,403.36059459634737,173.79901406843302,383.2753704382595,220,380.24885475014645" fill="url(#gradient)" />
</svg>
</div>

<div className={styles.treatmentListContainer}>

        <div className={styles.titleContainer}>We Treat:</div>
        <ul className={styles.treatmentList}>
            <li>Anxiety</li>
            <li>Obsessisve Compulsive Disorder</li>
            <li>Depression</li>
            <li>Panic Attacks</li>
            <li>Realationship Issues</li>
            <li>Specific Fobias</li>
            <li>Crazy Lady Baby Syndrome (CLBS)</li>
            <li>Husband Tolerance</li>
            <li>... and a lot more</li>
        </ul> 

        </div>

        <div class={styles.allButtonsAreaContainer}>

            <ButtonArea desc="meet our experts" 
            icon= {TherepistIcon}
             buttonText="Our Practitioners" linkAddress="practitioners" />

<ButtonArea desc="learn about our services" 
            icon= {BrainIcon}
             buttonText="Our Services" 
             linkAddress="therepy-types" />


<ButtonArea desc="learn about testing" 
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