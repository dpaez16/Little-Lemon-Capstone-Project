import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';

export default function HamburgerMenu(props) {
    const { children } = props;
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
                <MenuItem>
                    New Tab
                </MenuItem>
            </MenuList>
        </Menu>
        </nav>
    );
}