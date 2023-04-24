import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import pi from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } 
    
    return (
            <div>
                <div className={pi.descriptionBlock}>
                    { props.profile.photos.large != null 
                        ? <img src = { props.profile.photos.large } alt='user-avatar'/>
                        : <img src = { userPhoto } alt='user-avatar'/>
                    }
                    <div>
                        <span>{ props.profile.fullName }</span>
                    </div>
                    <ProfileStatusWithHooks status={ props.status } updateUserStatus = { props.updateUserStatus }/>
                    <div>
                        <span>{ props.profile.aboutMe }</span>
                    </div>
                </div>
            </div>
        )
    }

export default ProfileInfo;
