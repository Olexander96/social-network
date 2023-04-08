import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { useParams, Navigate } from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (userId == null) {
            userId = 28600; //мій профіль
        }

        this.props.getUserProfile(userId) //кріейтор санки
    }

    render () {
        if (!this.props.isAuth) return <Navigate to="/login"/>//якщо не залогынений то редырект на вкладку login

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


function withRouter(Component) {//для запису параметрыв з URL
    function ComponentWithRouterProp(props) {

        let params = useParams();
        return <Component {...props} params = { params }/>;
    }
    return ComponentWithRouterProp;
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const withURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(withURLDataContainerComponent);
