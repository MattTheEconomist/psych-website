import React, {useEffect, useState} from 'react';
import styles from "./homepage.module.css"
import LogoSplash from "./LogoSplash"
import Explanation from "./Explanation"
import MorphSection from './MorphSection';




function Homepage() {
  
 




return( <>

<LogoSplash /> 
<Explanation /> 
<MorphSection />
<div className={styles.helpDiv}> We can help! </div>




</>

)
}


export default Homepage