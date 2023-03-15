import React from 'react';
import Navbar from './Navbar'
import StoreContext from '../../StoreContext';

const NavbarContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {value => {
                return <Navbar sidebar= { value.getState().sidebar} />
            }
        }
        </StoreContext.Consumer>
        
    )
}

export default NavbarContainer; 
