import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import pi from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ( {profile, status, updateUserStatus} ) => {
    if (!profile) {
        return <Preloader/>
    } 
    
    return (
            <div>
                <div className={pi.descriptionBlock}>
                    { profile.photos.large != null 
                        ? <img src = { profile.photos.large } alt='user-avatar'/>
                        : <img src = { userPhoto } alt='user-avatar'/>
                    }
                    <div>
                        <span>{ profile.fullName }</span>
                    </div>
                    <ProfileStatusWithHooks status={ status } updateUserStatus = { updateUserStatus }/>
                    <div>
                        <span>{ profile.aboutMe }</span>
                    </div>
                </div>
            </div>
        )
    }

export default ProfileInfo;
