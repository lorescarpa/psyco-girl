/* eslint-disable jsx-a11y/alt-text */
import { FC } from "react";
import './Header.scss'
const coverPhoto = require('../../assets/resources/14.jpg');

const Contacts: FC = () => {

    return <>
        <section id='home'>
            <div className="header">
                <div className="header-photo">
                    <img src={coverPhoto} alt="" />
                </div>

                <div className="header-desc">
                    <div className="title">
                        <div className="head-1">
                            <h1><span>Dr.ssa</span> Alessia Vicini</h1>
                        </div>
                        <div className="head-2 gap-3">
                            <h2>P s i c o l o g a</h2>
                            <h2>C l i n i c a</h2>
                        </div>
                    </div>
                    <div className="subtitle">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. In culpa et blanditiis ducimus quae optio pariatur saepe nobis aut! Eum at consequatur velit officia non nihil veniam laborum ipsum debitis."</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Contacts;