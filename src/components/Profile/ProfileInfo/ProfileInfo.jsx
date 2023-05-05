import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import pi from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ( {profile, status, updateUserStatus, isOwner, savePhoto} ) => {

    const sendPhotoToServer = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0]);
        }
    }

    if (!profile) {
        return <Preloader/>
    } 
    return (
            <div>
                <div className={pi.descriptionBlock}>
                    <img src = { profile.photos.large || userPhoto } alt='user-avatar'/>
                    {isOwner ? <input type='file' onChange={ sendPhotoToServer }/> : null}
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
