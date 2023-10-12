import { Link } from 'react-router-dom';
import LittleLemonLogo from '../../assets/little_lemon_logo.jpg';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <img src={LittleLemonLogo} alt='Little Lemon Logo' />
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Menu</Link>
            <Link to='/'>Reservations</Link>
            <Link to='/'>Order Online</Link>
        </nav>
    );
};