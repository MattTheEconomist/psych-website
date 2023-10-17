import React from 'react';

import styles from "./faq.module.css"
import Question from './Question';

const FAQ = () => {
  const faqData = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
    },
   
  ];

  return (
    <div className={styles.faq}>
      {faqData.map((item, index) => (
        <Question key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ