import React, {useEffect, useState} from 'react';
import styles from "./homepage.module.css"

function MorphSection(){

    const [text1Opacity, setText1Opacity ] = useState(100)
    const [text2Opacity, setText2Opacity ] = useState(0)

    const [text1Filter, setText1Filter ] = useState(100)
    const [text2Filter, setText2Filter ] = useState(0)
    

    const [texts, setTexts] = useState([
        "Anxiety?",
        "Depression?",
        "OCD?",
        "ADHD?",
        "Loneliness?",
        "Fobia?"
    ])

    const [text1Content, setText1Content] = useState(texts[0])
    const [text2Content, setText2Content] = useState(texts[1])



const frameLimiter = (callback) => {
  let lastTime = 0;
  return () => {
    const now = performance.now();
    if (now - lastTime > 1000 / 60) {
      lastTime = now;
      callback();
    }
  };
};



    useEffect(()=>{
        const animateMe = frameLimiter(animate)
        animateMe()
    },[])




const morphTime = 1.3;
const cooldownTime = 2.2;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;


function doMorph() {
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	
	setMorph(fraction);
}



function setMorph(fraction) {

    setText2Filter(Math.min(8 / fraction - 8, 100))
    setText2Opacity(Math.pow(fraction, 0.4) * 100)
	fraction = 1 - fraction;
    setText1Filter(Math.min(8 / fraction - 8, 100))
    setText1Opacity(Math.pow(fraction, 0.4) * 100)

    setText1Content( texts[textIndex % texts.length])
    setText2Content(texts[(textIndex + 1) % texts.length])

}




function doCooldown() {
	morph = 0;
	
    setText1Filter(0)

}

function animate() {
	requestAnimationFrame(animate);
	
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 1000;
	time = newTime;
	
	cooldown -= dt;
	
	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}
		
		doMorph();
	} else {
		doCooldown();
	}
}



    return (<>


<div className={styles.morphAndResponse}>


<div className={styles.morphContainer} 
     >
	<span className={styles.text1} style={{
        opacity: `${text1Opacity}%`, 
        filter: `blur(${text1Filter}px)`, 
    }}>{text1Content}</span>

<span className={styles.text2} style={{
        opacity: `${text2Opacity}%`, 
        filter: `blur(${text2Filter}px)`, 
    }}>{text2Content}</span>

</div>



</div>

<svg id="filters">
	<defs>
		<filter id="threshold">
			<feColorMatrix in="SourceGraphic"
					type="matrix"
					values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140" />
		</filter>
	</defs>
</svg>



    
    </>)
}

export default MorphSection