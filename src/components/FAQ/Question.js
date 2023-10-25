import React, { useState } from 'react';
import styles from "./faq.module.css"


function Question({ questionText, answerText }) {
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
          {questionText}
        </div>
        {/* {showAnswer && <div className={styles.answer.show}>{answerText}</div>} */}
        {showAnswer && <div className={styles.answerShow}>{answerText}</div>}
        {/* {showAnswer && <div style={{backgroundColor: 'teal'}}className={styles.answerShow}>{answerText}</div>} */}
      </div>
    );
  }
  
  export default Question;

  
  
  
  
  