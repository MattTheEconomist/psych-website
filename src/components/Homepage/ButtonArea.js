import React from "react";
import styles from "./explanation.module.css"


function ButtonArea({desc, icon: Icon, buttonText, linkAddress}){

 return ( <div className={styles.buttonAreaContainer}>
   
    <div>

    <Icon />
    </div>

    <div className={styles.content}>
        
        <p>{desc}</p>
    </div>

    <a className={styles.button} href={`/${linkAddress}`}> {buttonText} </a>

 </div>

 )

}

export default ButtonArea