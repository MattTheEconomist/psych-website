import React from 'react';



import styles from "./faq.module.css"
import Question from './Question';

const FAQ = () => {

  const faqData = [
    {
      question: 'Is therepy right for me?',
      answer: `idk lets find out together. It helps to have a few sentences to figure out how this will look in the final page.It helps to have a few sentences to figure out how this will look in the final page. It helps to have a few sentences to figure 
      out how this will look in the final page. It helps to have a few sentences to figure out how this will look in the final page.`,
    },
    {
      question: 'What types of patients do you see?',
      answer: `We see all kinds of patients, from those with a fear of driving a car to those grieving the loss of loved ones.It helps to have a few sentences to figure out how this will look in the final page.It helps to have a few sentences to figure out how this will look in the final page. It helps to have a few sentences to figure 
      out how this will look in the final page. It helps to have a few sentences to figure out how this will look in the final page.
      ces to figure out how this will look.   out how this will look in the final page. It helps to have a few sentences to figure out how this will look in the final page.ces to figure out how this will look `,
    },
    {
      question: 'We need at least five or six questions here?',
      answer: `We see all kinds of patients, from those with a fear of driving a car to those grieving the loss of loved ones.It helps to have a few sentences to figure out how this will look in the final page.It helps to have a few sentences to figure out how this will look in the final page. It helps to have a few sentences to figure 
      out how this will look in the final page. It helps to have a few sentences to figure out how this will look in the final page.`,
    },

    {
      question: 'Why sad :( ? ',
      answer: `We see all kinds of patients, from those with a fear of driving a car to those grieving the loss of loved ones.It helps to have a few sentences to figure out how this will look in the final page.It helps to have a few sentences to figure out how this will look in the final page. It helps to have a few sentences to figure 
      out how this will look in the final page. It helps to have a few sentences to figure out how this will look in the final page.`,
    },
    {
      question: 'Can i see my doctor virtually? ',
      answer: `We see all kinds of patients, from those with a fear of driving a car to those grieving the loss of loved ones.It helps to have a few sentences to figure out how this will look in the final page.It helps to have a few sentences to figure out how this will look in the final page. It helps to have a few sentences to figure 
      out how this will look in the final page. It helps to have a few sentences to figure out how this will look in the final page.`,
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
      <h1>Frequently Asked Questions</h1>
   
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