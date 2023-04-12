import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import { useParams } from "react-router-dom";
import wiAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (userId == null) {
            userId = 28600; //мій профіль
        }

        this.props.getUserProfile(userId) //кріейтор санки
        this.props.getUserStatus(userId)
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus = { this.props.updateUserStatus }/>
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
        status: state.profilePage.status
    }
}


export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    wiAuthRedirect // HOC якщо не залогынений то редырект на вкладку login
)(ProfileContainer);
