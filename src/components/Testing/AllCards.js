import React from 'react'; 

import SingleCard from './SingleCard';






function AllCards (){

    const cardData=[

{
        title: "ADHD", 
        info: "Most assessments take just one session! To ensure your child's best performance, a good night's sleep and a full belly beforehand are key. You can also ease their nerves by explaining they'll work with a friendly person like a teacher on fun activities."}, 
        {
        title: "Neuro-Psych", 
        info: "The neuropsychological/psycho-educational evaluation process commences with an intake session, conducted either telephonically or in person. During this session, parents are invited to provide pertinent academic documentation, including teacher reports, prior testing results, and any other information relevant to the referral reason."}, 
        {
        title: "Autism", 
        info: "Each child is unique, and our evaluation reflects that. Our highly qualified ASD specialists draw on the latest evidence-based practices, including ADOS-2, rating scales, and neuropsychological measures, to tailor an assessment experience to your child's specific needs. This includes gathering information from parents/caregivers and teachers, observing your child, and conducting individual testing, incorporating non-verbal measures as needed."}, 

        {
        title: "Admissions", 
        info: "Private School admissions tests, ...Most assessments take just one session! To ensure your child's best performance, a good night's sleep and a full belly beforehand are key. You can also ease their nerves by explaining they'll work with a friendly person like a teacher on fun activities."}, 


    ]

    return(<>
    <h3>
    ALL CAFRDS</h3>


  { cardData.map((item, idx) => (
        <SingleCard key={idx} title={item.title} info={item.info}  />
      ))}



    </>)

}


export default AllCards; 