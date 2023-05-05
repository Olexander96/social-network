import React from 'react';
import p from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    return (
        <div className={p.content}>
            <ProfileInfo profile={ props.profile } 
                status={ props.status } 
                updateUserStatus = { props.updateUserStatus }
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
