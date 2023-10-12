import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import { Children, cloneElement } from 'react';
import './HamburgerMenu.css';

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
                {
                    Children.map(children, (child, idx) => {
                        return (
                            <MenuItem>
                                {cloneElement(child, { key: idx })}
                            </MenuItem>
                        );
                    })
                }
            </MenuList>
        </Menu>
        </nav>
    );
}