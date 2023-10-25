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
      out how this will look in the final page. It helps to have a few sentences to figure out how this will look in the final page.`,
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
      question: 'What should the final question on this page be ? ',
      answer: `We see all kinds of patients, from those with a fear of driving a car to those grieving the loss of loved ones.It helps to have a few sentences to figure out how this will look in the final page.It helps to have a few sentences to figure out how this will look in the final page. It helps to have a few sentences to figure 
      out how this will look in the final page. It helps to have a few sentences to figure out how this will look in the final page.`,
    },
   
  ];

  return (
    <div className={styles.faq}>
      {faqData.map((item, index) => (
        <Question key={index} questionText={item.question} answerText={item.answer} />
      ))}
    </div>
  );
};

export default FAQ