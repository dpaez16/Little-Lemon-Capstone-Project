import { Link } from 'react-router-dom';
import HamburgerMenu from './hamburgerMenu/HamburgerMenu';
import LittleLemonLogo from '../../assets/little_lemon_logo.jpg';
import './Navbar.css';

export default function Navbar() {
    const links = [
        <Link to='/'>Home</Link>,
        <Link to='/'>About</Link>,
        <Link to='/'>Menu</Link>,
        <Link to='/reservations'>Reservations</Link>,
        <Link to='/'>Order Online</Link>,
    ];

    return (
        <nav className='Navbar'>
            <img src={LittleLemonLogo} alt='Little Lemon Logo' />
            {links}
            <HamburgerMenu>
                {links}
            </HamburgerMenu>
        </nav>
    );
};