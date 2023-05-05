import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto } from '../../redux/profile-reducer';
import wiAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../hoc/withRouter';

class ProfileContainer extends React.Component {

    refreshProfile () {
        let userId = this.props.params.userId;
        if (userId == null) {
            userId = this.props.authorizedUserId; //мій авторизований профіль профіль
            if (!userId) {
                this.props.history.push("/login") //якщо нам не прийде інформація по буде профілю то редірект на логін сторінку
            }
        }

        this.props.getUserProfile(userId) //кріейтор санки
        this.props.getUserStatus(userId)
    };

    componentDidMount() {
        this.refreshProfile();
    };

    componentDidUpdate (prevProps, prevState) {
        if (this.props.params.userId !== prevProps.params.userId) {
            this.refreshProfile();
        }
    }

    render () {
        return (
            <Profile {...this.props} 
                profile={this.props.profile} 
                status={this.props.status} 
                updateUserStatus = { this.props.updateUserStatus }
                isOwner = {!this.props.params.userId}
                savePhoto =  { this.props.savePhoto }
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
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    withRouter,
    wiAuthRedirect // HOC якщо не залогынений то редырект на вкладку login
)(ProfileContainer);
