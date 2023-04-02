import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { useParams } from "react-router-dom";
import { profileAPI } from '../../api/api'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (userId == null) {
            userId = 28600; //мій профіль
        }

        profileAPI.getProfile(userId).then(data => {
                this.props.setUserProfile(data);
            })
    }

    render () {
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
        profile: state.profilePage.profile
    }
}

const withURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withURLDataContainerComponent);
