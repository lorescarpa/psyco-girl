import { FC, useState } from 'react'
import './Navbar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
interface Props {
    toggle?: () => void;
}

const Menu: FC<Props> = ({ toggle }) => {
    return (
        <>
            <p className='mb-0 navbar-link'><a href="#home" onClick={toggle}>Home</a></p>
            <p className='mb-0 navbar-link'><a href="#about-me" onClick={toggle}>About me</a></p>
            {/* <p className='mb-0 navbar-link'><a href="#services" onClick={toggle}>Servizi</a></p> */}
            <p className='mb-0 navbar-link'><a href="#contacts" onClick={toggle}>Contatti</a></p>
            {/* <p className='mb-0 navbar-link'><a href="#news-letter" onClick={toggle}>News Letter</a></p> */}
        </>
    )
}

const NavBar: FC = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);

    const handleToggleMenu = (v: boolean) => {
        v ? setToggleMenu(v) : handleAnimation(v)
    }

    const handleAnimation = (v: boolean) => {
        setStartAnimation(!v);
        setTimeout(() => {
            setToggleMenu(v);
            setStartAnimation(v)
        }, 150);
    }

    return (
        <>
            <div className="navbar-container sticky-top">
                <div className="gradient d-flex flex-row align-items-center justify-content-between h-100">
                    <div className="navbar-links d-flex flex-row align-items-center justify-content-end gap-5">
                        <div className="navbar-links-container">
                            <Menu />
                        </div>
                    </div>
                    <div className="menu-icon">
                        {toggleMenu ?
                            <CloseIcon onClick={() => handleToggleMenu(false)} /> :
                            <MenuIcon onClick={() => handleToggleMenu(true)} />
                        }
                    </div>
                </div>
            </div>
            {toggleMenu &&
                <div className={"navbar-links-container-menu" + (startAnimation ? " close" : "")}>
                    <Menu toggle={() => handleToggleMenu(false)} />
                </div>}
        </>
    )
}

export default NavBar