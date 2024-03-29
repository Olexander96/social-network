import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    
    render() {
        return <Header { ...this.props }/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        themeType: state.settings.themeType
    }
}
export default connect(mapStateToProps, { logout })(HeaderContainer);
