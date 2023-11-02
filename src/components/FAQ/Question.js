import React, { useState, useEffect } from 'react';
import styles from "./faq.module.css"


function Question({ questionText, answerText }) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [height, setHeight] = useState(0)

    function calcAnswerHeight(ansText){
        const charsInLine= 82
        const bottomBorderPix = 30
        const answerTextLength = ansText.length
        const lines = Math.floor(answerTextLength/charsInLine)
        const pixPerLine = 22
        const lineInPix = lines * pixPerLine
        const totalHeight = lineInPix +bottomBorderPix
        // console.log(answerTextLength, lines, totalHeight)
        return totalHeight
    }

    useEffect(() => {
        // const answerDiv = document.querySelector(`.${styles.answer}`);
        // const answerHeight = answerDiv.scrollHeight+50;

        const answerHeight = calcAnswerHeight(answerText)

        if (showAnswer){
            setHeight(answerHeight);
            console.log(answerHeight)
        }
        else{
            setHeight(0)
        }
      }, [showAnswer, answerText]);
  


    const toggleAnswer = () => {
      setShowAnswer(!showAnswer);
    };
  
    let triangleClassNames = `${styles.triangle} ${showAnswer ? styles.rotateTriangle : ''}`
    let answerClassNames = `${styles.answer} ${showAnswer ? styles.answerShow : ''}`



    return (
      <div className={styles.faqQuestion}>
        <div
          className={`${styles.question} ${showAnswer ? styles.expanded : ''}`}
          onClick={toggleAnswer}
            >
          {questionText}
          <div className={triangleClassNames}></div>
        </div>
        <div className={answerClassNames} 
            style={{ 
                height: height, 
                overflow: 'auto', 
                transition: "all 0.5s ease-in-out"
             }}
        >{answerText}</div>
      </div>
    );
  }
  
  export default Question;

  
  
  
  
  