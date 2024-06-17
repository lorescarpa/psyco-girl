/* eslint-disable jsx-a11y/alt-text */
import { FC } from "react";
import './AboutMePage.scss'
const pofilePhoto = require('../../assets/resources/6.jpg');

const AboutMe: FC = () => {

    return <>
        <section id='about-me' className="section">
            <div className="section-title">
                <div className="title">
                    <h2>C h i</h2>
                    <h2>s o n o</h2>
                </div>
            </div>
            <div className="section-content">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Optio quidem quaerat architecto consectetur dolorem sed?
                    Laboriosam porro, dolorem perferendis reprehenderit eos
                    animi minima vel hic sint nisi officiis odio ad.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Optio quidem quaerat architecto consectetur dolorem sed?
                </p>
                <p>
                    Laboriosam porro, dolorem perferendis reprehenderit eos
                    animi minima vel hic sint nisi officiis odio ad.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    At ab consectetur eaque earum ut eos pariatur nisi labore non, cum omnis.
                    Ea sed necessitatibus ut aut eius obcaecati! Rem, accusantium?
                </p>
            </div>
        </section>
    </>
}

export default AboutMe;