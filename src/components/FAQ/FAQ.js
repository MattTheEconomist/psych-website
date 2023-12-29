import React from 'react';



import styles from "./faq.module.css"
import Question from './Question';

const FAQ = () => {

  const faqData = [
    {
      question: 'How is Capital Therepy Group different from other practices?',
      answer: `We create a space where everyone's experiences are met with respect and non-judgment. This welcoming atmosphere isn't mere chance; it's built on solid evidence-based practices. Our guides utilize proven techniques like CBT and ACT, equipping you with practical tools to manage anxiety, challenge negative thoughts, and develop healthy coping mechanisms. But evidence doesn't eclipse empathy. Our commitment to each individual shines through in every session, with personalized support and encouragement that goes beyond textbook solutions. We celebrate your triumphs, big and small, and offer a compassionate hand during rough patches. This potent blend of warmth, evidence, and unwavering dedication creates a transformative space where you're not just a client, but a valued member of a supportive community, empowered to blossom and thrive`,
    },
    
    {
      question: 'Does Capital Therepy Group offer online therepy?',
      answer: `Yes we do! Sessions are conducted online via zoom. Please email us at client_help@capitaltherepygroup.com to book an online therepy session. `,
    },
    {
      question: 'In what localities do you operate?',
      answer: `We are currently open to all clients who reside in Virginia, DC, Maryland or New York. If you live in any of these states and are looking for therepy, please email us at client_help@capitaltherepygroup.com to book an online therepy session.`,
    },
    {
      question: 'Does Capital Therepy Group accept insurance?',
      answer: `Currently we are not accepting medical insurance for our services. `,
    },

    {
      question: 'Is Capital Therepy Group HIPAA Compliant? ',
      answer: `Yes we are. Capial Therepy Group complies with all HIPAA stipulations (?) `,
    },

    {
      question: 'What should the final question be? ',
      answer: `We see all kinds of patients, from those with a fear of driving a car to those grieving the loss of loved ones.It helps to have a few sentences to figure out how this will look in the final page.It helps to have a few sentences to figure out how this will look in the final page. It helps to have a few sentences to figure 
      out how this will look in the final page. It helps to have a few sentences to figure out how this will look in the final page.`,
    },
   
  ];
  return (
    <>
    <div className={`${styles.faqTitleSpacer} ${styles.polkaDots}`}></div>
    <div className={`${styles.faqTitle} ${styles.polkaDots}`}>
      
      <h1 className={styles.faqTitleText}>Frequently Asked Questions</h1>
   
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#fff" fill-opacity="1"
     d="M0,224L120,192C240,160,480,96,720,101.3C960,107,1200,181,1320,218.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"

     ></path></svg>


    </div>
    

        <div className={styles.faq}>
      {faqData.map((item, index) => (
        <Question key={index} questionText={item.question} answerText={item.answer} />
      ))}
    </div>
    </>

  );
};

export default FAQ