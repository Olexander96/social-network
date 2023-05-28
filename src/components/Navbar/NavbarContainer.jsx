import Navbar from './Navbar'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
        themeType: state.settings.themeType
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer; 
