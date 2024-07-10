import React from 'react';
import styles from './styles.module.css';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const buttonClass = `btn btn-warning text-light fw-semibold ${styles.glowOnHover}`;
    const icon = <i className="fa-regular fa-paper-plane"></i>;

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            question: e.target.question.value,
        };

        fetch(`${process.env.REACT_APP_API_URL_CONTACTS}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your data has been successfully sent!',
                        showConfirmButton: false,
                        timer: 2000
                    }).then(() => {
                        window.location.href = '/'; // Powrót do strony głównej
                    });
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                });
            });
    };

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required/>
            <input type="email" name="email" placeholder="Your Email" required/>
            <textarea name="question" placeholder="Your Question" required></textarea>
            <button type="submit" className={buttonClass}>
                {icon} SUBMIT
            </button>
        </form>
    );
};

export default ContactForm;
