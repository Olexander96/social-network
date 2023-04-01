import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import axios from 'axios';
import { setUserProfile } from '../../redux/profile-reducer';
import { useParams } from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (userId === null) {
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId, {
            headers: {
                "API_KEY": "c17569bc-d7ea-4eb5-8253-5b039" //наш ключ доступу до API
            }
        })
            .then(response => {
                this.props.setUserProfile(response.data);
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
