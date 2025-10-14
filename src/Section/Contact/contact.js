import './contact.css';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ImMail } from "react-icons/im";

function Contact() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
        rootMargin: '-150px 0px',
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Message depuis Portfolio de ${formData.name}`);
        const body = encodeURIComponent(formData.message);
    
        window.location.href = `mailto:b.poussing@outlook.fr?subject=${subject}&body=${body}`;
      };
      

    return (
        <section ref={ref} id="contact" className="contact main">
            <h2 className={`fade-up ${inView ? 'visible' : ''}`}>Contact</h2>

            <p className={`fade-up ${inView ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
                N’hésitez pas à me contacter via le formulaire ci-dessous :
            </p>

            <form onSubmit={handleSubmit} className={`contact-form fade-up ${inView ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Adresse e-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="send-btn">Envoyer</button>
            </form>

            <div className={`socials fade-up ${inView ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
                <p>Retrouvez-moi aussi sur :</p>
                <div className="social-links">
                    <a  href="https://github.com/Bat057" 
                        aria-label="GitHub de Baptiste Poussing"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} className='github' />
                    </a>
                    <a href="b.poussing@outlook.fr.com" aria-label="Adresse mail de Baptiste Poussing">
                        <ImMail className='mail-icon' />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;

