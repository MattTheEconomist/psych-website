import React, {useEffect, useState} from 'react';
import styles from "./homepage.module.css"
import LogoSplash from "./LogoSplash"
import Explanation from "./Explanation"
import MorphSection from './MorphSection';
import BlogTiles from './BlogTilles';



function Homepage() {
  
 




return( <>

<LogoSplash /> 
<Explanation /> 
<BlogTiles  /> 
<MorphSection />
<div className={styles.helpDiv}> You're in the right place </div>






</>

)
}


export default Homepage