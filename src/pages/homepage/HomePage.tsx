import { FC } from "react"
import './HomePage.scss'
import NavBar from "../../shared/navbar/Navbar";
import AboutMe from "../aboutme/AboutMePage";
import Contacts from "../contacts/Contacts";
import Header from "../header/Header";
const HomePage: FC = () => {

    return (<>
        <NavBar />
        <div className="container">
            <div className="section main-header">
                <Header />
            </div>
            <div className="section about-me">
                <AboutMe />
            </div>
            <div className="section contacts">
                <Contacts />
            </div>
        </div>
    </>)

}

export default HomePage;
