import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import styles from '../components/Contact/styles.module.css';

const ContactPage = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.contactHeader}>
                    <h1 className={styles.icon}>Contact Us</h1>

                    <p>Have questions? Fill out the form below to get in touch with us.</p>
                </div>

                <ContactForm/>
                <ContactInfo/>
            </div>
        </div>

    );
};

export default ContactPage;
