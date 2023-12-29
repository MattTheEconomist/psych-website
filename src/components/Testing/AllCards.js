import React, { useState } from "react";

import SingleCard from './SingleCard';

import styles from "./testing.module.css"


function AllCards (){
    const [cardData, setCardData] = useState([

            {
        title: "ADHD", 
        info: "Most assessments take just one session! To ensure your child's best performance, a good night's sleep and a full belly beforehand are key. You can also ease their nerves by explaining they'll work with a friendly person like a teacher on fun activities.", 
        isOpen: false 
          }, 
         {
        title: "Neuro-Psych", 
        info: "The neuropsychological/psycho-educational evaluation process commences with an intake session, conducted either telephonically or in person. During this session, parents are invited to provide pertinent academic documentation, including teacher reports, prior testing results, and any other information relevant to the referral reason.", 
        isOpen: false 
        }, 

            {
            title: "Admissions", 
            info: "Private School admissions tests, ...Most assessments take just one session! To ensure your child's best performance, a good night's sleep and a full belly beforehand are key. You can also ease their nerves by explaining they'll work with a friendly person like a teacher on fun activities.", 
            isOpen: false 
        }, 
           
        {
        title: "Autism", 
        info: "Each child is unique, and our evaluation reflects that. Our highly qualified ASD specialists draw on the latest evidence-based practices, including ADOS-2, rating scales, and neuropsychological measures, to tailor an assessment experience to your child's specific needs. This includes gathering information from parents/caregivers and teachers, observing your child, and conducting individual testing, incorporating non-verbal measures as needed.",

        isOpen: false }

    ])

    function toggleCard(cardIdx){
        // console.log('toggling ' + `${cardIdx}`)
        setCardData(
            cardData.map((card, i)=>{
                if(i === cardIdx){
                    card.isOpen = !card.isOpen
                }

                return card
            })
        )

        }



        function toggleOpen(thing){
            return !thing
        }



    return(<>
    <p className={styles.allCardsTitle}>We Assess the Following Issues. Select each one to learn more</p>

 { cardData.map((card, idx) => (
      <SingleCard key={idx} indexInput={idx} card={card} toggleCard={toggleCard} />
      ))}   

    </>)

}


export default AllCards; 

