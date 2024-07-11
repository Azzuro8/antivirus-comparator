import React, {useEffect, useState} from 'react';
import {createPortal} from "react-dom";
import styles from '../../layouts/SplashScreenContent/styles.module.css';


const SplashScreen = ({refCurrent}) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 4000)
        return () => {
            clearInterval(timer)
        }
    }, [])




    return createPortal(
        <div
            className={loading ? styles.splashContainer : `${styles.splashContainer} ${styles.splashContainerDisabled}`}>
            <div className={styles.headerContainer}>
                <h1 className={styles.headerTitle}>
                    <span className={styles.largeLetter}>P</span>ERFECT <span className={styles.largeLetter}>A</span>NTIVIRUS
                </h1>
                <div className={styles.underline}></div>
                <div className={styles.subheading}>Your Ultimate Security Solution</div>
            </div>
        </div>,
        refCurrent
    );
}
export default SplashScreen;