import React, { useState } from "react";

import SingleCard from './SingleCard';

import styles from "./services.module.css"


function AllCards (){
    const [cardData, setCardData] = useState([

            {
        title: "Anxiety", 
        info: "Cognitive behavioral therapy (CBT) tackles anxiety by reshaping unhelpful thinking patterns and behaviors. It helps you identify how your thoughts affect your feelings and actions, then teaches you to challenge and rewrite those negative thought spirals. You'll learn practical coping mechanisms to manage anxiety in the moment, like relaxation techniques and exposure therapy (gradually facing your fears in a safe environment). By understanding your triggers and building new ways to respond, CBT empowers you to reclaim control over anxiety and navigate challenges with newfound confidence.", 
        isOpen: false 
          }, 
         {
        title: "Depression", 
        info: "Evidence-based therapies for depression tackle the root causes, not just the symptoms. They're built on rigorous research and proven to be effective. Therapy might involve Cognitive Behavioral Therapy (CBT) to challenge negative thinking patterns, Interpersonal Therapy (IPT) to improve communication and relationships, or mindfulness-based approaches to cultivate present-moment awareness and break out of negative thought cycles. These therapies provide practical tools and skills to manage depression, like identifying triggers, developing healthy coping mechanisms, and enhancing self-compassion. By actively engaging in tailored therapy, you can break free from the grip of depression and build a more fulfilling life.", 
        isOpen: false 
        }, 

        {
        title: "Specific Fobia", 
        info: " Imagine conquering your fear of spiders, not through brute force, but through a scientific climb up your personal phobic mountain. Exposure therapy, backed by mountains of research, is your guide. You take gradual steps, from tiptoeing near pictures of spiders to eventually, with therapist support, facing them in real life. This rewires your brain's fear circuits, weakening the 'danger' signal associated with your phobia. And it doesn't stop there. Therapy equips you with a toolbox of anxiety management techniques, helping you not just conquer spiders, but manage anxiety's grip in all aspects of life. This powerful combination isn't just evidence-based, it's life-changing. With each step up that mountain, you build resilience, reclaim control, and pave the way for a future unburdened by fear. So, breathe deep, take the first step, and let science and therapy guide you towards the exhilarating view from the peak of your own courage.",
        isOpen: false },
        {
        title: "Grief", 
        info: "  Evidence-based therapies like CBT and ACT offer powerful tools for navigating grief's turbulent waters. They help us challenge negative thoughts, understand our emotions, and develop healthy coping mechanisms like mindfulness and relaxation techniques. By learning to identify triggers and manage intense emotions, we gain control over grief's grip. These therapies empower us to find meaning in loss, rebuild connections, and embrace new possibilities, without fearing the lingering pain. While grief remains a journey, evidence-based therapy equips us with the compass and map to chart a path towards healing and living again.",
        isOpen: false },
        {
        title: "Relationship Issues", 
        info: "Communication breakdowns, trust issues, and constant conflict can easily trap families, couples, and friends in a cycle of frustration and isolation. Fortunately, therapy offers a proven escape route. It's not about quick fixes or magic wands, but a collaborative journey with a skilled guide. Therapists equip individuals and groups with practical tools for clear communication, including active listening and assertive expression. This helps bridge communication gaps and de-escalate conflict, replacing fiery clashes with dances of understanding. By exploring perspectives and emotions in a safe space, therapy fosters empathy and understanding, allowing individuals to recognize their own triggers and those of others, strengthening bonds and preventing misunderstandings. Whether navigating the complexities of family dynamics, the delicate ballet of friendship, or the intricacies of romantic relationships, therapy empowers everyone to set healthy boundaries, rebuild trust, and rediscover the joy of genuine connection. Reaching out for professional support isn't a sign of weakness, but a proactive step towards building healthier, happier relationships.",
        isOpen: false },
        {
            title: "& More", 
            info: "Your issues not listed here? No problem. Our practitioners have experience in a wide range of issues including relationship issues, trauma, stress and a lot more. ",
            isOpen: false },
        
    

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
    <p className={styles.allCardsTitle}>We provide expert treatment for: </p>

 { cardData.map((card, idx) => (
      <SingleCard key={idx} indexInput={idx} card={card} toggleCard={toggleCard} />
      ))}   

    </>)

}


export default AllCards; 

