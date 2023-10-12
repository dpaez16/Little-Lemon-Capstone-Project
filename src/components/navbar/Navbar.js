import { Link } from 'react-router-dom';
import HamburgerMenu from './hamburgerMenu/HamburgerMenu';
import LittleLemonLogo from '../../assets/little_lemon_logo.jpg';
import './Navbar.css';

export default function Navbar() {
    const links = [
        { to: '/', text: "Home" },
        { to: '/', text: "About" },
        { to: '/', text: "Menu" },
        { to: '/reservations', text: "Reservations" },
        { to: '/', text: "Order Online" },
    ];

    return (
        <nav className='Navbar'>
            <img src={LittleLemonLogo} alt='Little Lemon Logo' />
            {
                links.map((link, idx) => {
                    return (
                        <Link to={link.to} key={idx}>{link.text}</Link>
                    );
                })
            }
            <HamburgerMenu links={links} />
        </nav>
    );
};