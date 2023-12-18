import React from 'react';
import styles from './footer.module.css'; 





function Footer() {
  return (
    <>
    <div className={styles.spacer}></div>

        <div className={styles.footerContainer}>
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.contact}>
                    <div className={styles.email}>client_help@capitaltherepygroup.com</div>
                    <div className={styles.email}>|</div>
                    <div className={styles.phone}>(123) 456-7890</div>
                </div>
            </div>
        </div>
    </div>
    </>

  );
}

export default Footer;

