import React from "react";
import { Navigate } from "react-router";
import {connect} from 'react-redux';

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const wiAuthRedirect = (Component) => { // HOC компонента вищого порядку для редіректа

    class RedirectComponent extends React.Component {

        render () {
            if (!this.props.isAuth) return <Navigate to="/login"/>//якщо не залогынений то редырект на вкладку login
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent); // для то щоб this.props.isAuth прокинути в цю компоненту

    return ConnectedAuthRedirectComponent
}

export default wiAuthRedirect;