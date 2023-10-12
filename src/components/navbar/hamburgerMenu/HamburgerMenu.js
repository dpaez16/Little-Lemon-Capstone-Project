import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

export default function HamburgerMenu(props) {
    const { links } = props;
    return (
        <nav className='HamburgerMenu'>
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <MenuList>
                {
                    links.map((link, idx) => {
                        return (
                            <MenuItem key={idx}>
                                <Link to={link.to}>{link.text}</Link>
                            </MenuItem>
                        );
                    })
                }
            </MenuList>
        </Menu>
        </nav>
    );
}