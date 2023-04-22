import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import wiAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../hoc/withRouter';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (userId == null) {
            userId = this.props.authorizedUserId; //мій авторизований профіль профіль
            if (!userId) {
                this.props.history.push("/login") //якщо нам не прийде інформація по буде профілю то редірект на логін сторінку
            }
        }

        this.props.getUserProfile(userId) //кріейтор санки
        this.props.getUserStatus(userId)
    }

    render () {
        return (
            <Profile {...this.props} 
                profile={this.props.profile} 
                status={this.props.status} 
                updateUserStatus = { this.props.updateUserStatus }
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}


export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    wiAuthRedirect // HOC якщо не залогынений то редырект на вкладку login
)(ProfileContainer);
