/* eslint-disable jsx-a11y/alt-text */
import { FC } from "react";
import './Contacts.scss';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
const profilePhoto = require('../../assets/resources/37.jpg');

const Contacts: FC = () => {

    return <>
        <section id='contacts' className="section">
            <div className="section-desc">
                <div className="section-title">
                    <div className="title">
                        <h2>C o n t a t t i</h2>
                    </div>
                </div>
                <div className="section-content">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Optio quidem quaerat architecto consectetur dolorem sed?
                        Laboriosam porro, dolorem perferendis reprehenderit eos.
                    </p>
                    <div className="contacts-section">
                        <div className="contact-item">
                            <LocationOnIcon fontSize="large" />
                            <label>Torino (TO), Italia</label>
                        </div>
                        <div className="contact-item">
                            <WhatsAppIcon fontSize="large" />
                            <label>+393284665911</label>
                        </div>
                        <div className="contact-item">
                            <EmailIcon fontSize="large" />
                            <label>dottssavicini@gmail.com</label>
                        </div>
                        <div className="contact-item">
                            <AlternateEmailIcon fontSize="large" />
                            <label>alessia.vicini@psypec.it</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-photo">
                <img src={profilePhoto} alt="" />
            </div>
        </section>
    </>
}

export default Contacts;