import React from 'react';
import styles from './footer.module.css'; 





function Footer() {
  return (
    <footer className={styles['footer--pin']}>
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.contact}>
                    <div className={styles.email}>example@example.com</div>
                    <div className={styles.phone}>(123) 456-7890</div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;

