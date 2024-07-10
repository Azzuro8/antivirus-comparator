import React from 'react';
import styles from './styles.module.css';

const ContactInfo = () => {
    return (
        <div className={styles.contactInfo}>
            <p>You can also contact us via email: <a href="mailto:pa@antiviruses.com">pa@antiviruses.com</a></p>
        </div>
    );
};

export default ContactInfo;
