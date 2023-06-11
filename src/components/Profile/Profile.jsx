import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo profile={ props.profile } 
                status={ props.status } 
                updateUserStatus = { props.updateUserStatus }
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfileFormData = {props.saveProfileFormData}
                editModeStatus = {props.editModeStatus}
                themeType = {props.themeType}
            />
            {props.isOwner ? <MyPostsContainer className = {styles.postsBlock} themeType = {props.themeType} /> : null}
        </div>
    )
}

export default Profile;
