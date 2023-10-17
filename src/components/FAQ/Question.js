import React, { useState } from 'react';
import styles from "./faq.module.css"


function Question({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);
  
    const toggleAnswer = () => {
      setShowAnswer(!showAnswer);
    };
  
    return (
      <div className={styles.faqQuestion}>
        <div
          className={`${styles.question} ${showAnswer ? styles.expanded : ''}`}
          onClick={toggleAnswer}
        >
          {question}
          <i className={`fa ${showAnswer ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
        </div>
        {showAnswer && <div className={styles.answer.show}>{answer}</div>}
      </div>
    );
  }
  
  export default Question;

  
  
  
  
  