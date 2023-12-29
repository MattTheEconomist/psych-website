import React , {useEffect, useState} from 'react';

import styles from "./testing.module.css"


function SingleCard({ indexInput, card, toggleCard }){

    const [height, setHeight] = useState(0)

    function calcAnswerHeight(ansText){
        const charsInLine= 50
        const bottomBorderPix = 30
        const infoTextLength = ansText.length
        const lines = Math.floor(infoTextLength/charsInLine)
        const pixPerLine = 15
        const lineInPix = lines * pixPerLine
        const totalHeight = lineInPix +bottomBorderPix
        return totalHeight
    }


    useEffect(() => {

        const infoHeight = calcAnswerHeight(card.info)
        if (card.isOpen){
            setHeight(infoHeight);
        }
        else{
            setHeight(0)
        }
        console.log(height)
      }, [card.isOpen]);
  


    // let infoClassNames = `${styles.cardInfo} ${card.isOpen ? styles.answerShow : ''}`



    return (<>

<div className={`${styles.cardContainer} ${card.isOpen ? styles.expandedNew : styles.hideInfo}` }
onClick={()=> toggleCard(indexInput)}
index={card.indexInput}

>

    <div className={styles.cardTitle}>

{card.title}
        
</div>
<div className={styles.cardInfo}
style={{ 
    height: height, 
    transition: "all 0.5s ease-in-out", 
    overFlow: 'auto',
    scrollbarWidth: 'none', 
    content: '', 
 }}
>
{card.info}
</div>
    </div>


    </>)
}

export default SingleCard