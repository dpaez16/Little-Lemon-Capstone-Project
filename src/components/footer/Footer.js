import LittleLemonLogo from '../../assets/little_lemon_logo.jpg';
import { Link } from 'react-router-dom';
import FooterColumn from './footerColumn/FooterColumn';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <img src={LittleLemonLogo} alt='Little Lemon Logo' />
            <FooterColumn title='Navigation'>
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Menu</Link>
                <Link to='/'>Reservations</Link>
                <Link to='/'>Order Online</Link>
            </FooterColumn>
            <FooterColumn title='Social Media'>
                <Link to='/'>Facebook</Link>
                <Link to='/'>Instagram</Link>
                <Link to='/'>LinkedIn</Link>
            </FooterColumn>
        </footer>
    );
};