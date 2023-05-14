import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileData from './ProfileData';
import ProfileDataEditForm from './ProfileDataEditForm';
import { ReactComponent as DownloadImage } from '../../../assets/images/profile/download-avatar-icon.svg';


const ProfileInfo = ( {profile, status, updateUserStatus, isOwner, savePhoto, saveProfileFormData, editModeStatus} ) => {
    const [editMode, setEditMode] = useState(false);

    const sendPhotoToServer = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfileFormData(formData)
        if (editModeStatus === "SUCCESS")  {
            setEditMode(false)
        }
    };

    if (!profile) {
        return <Preloader/>
    } 
    return (
            <div>
                <div className={styles.descriptionBlock}>
                    <div className={ styles.avatarBlock }>
                        <img src = { profile.photos.large || userPhoto } alt='user-avatar'/>
                        {isOwner 
                            ? <label>
                                    <DownloadImage className={ styles.downloadIcon}/>
                                    {/* change image */}
                                    <input type='file' onChange={ sendPhotoToServer }/>
                              </label>
                            : null
                        }
                    </div>
                    <ProfileStatusWithHooks status={ status } updateUserStatus = { updateUserStatus }/>
                    <div className={styles.profileDataBlock}>
                        <h1>Profile info:</h1>
                        {editMode 
                            ? <ProfileDataEditForm initialValues={ profile } //initialValues це вбудована ф-ція в redux-form-state яка дозволяє передати значення які до нас прийшли в режим редагування інпута
                                onSubmit={ onSubmit } 
                                profile = { profile }
                                editModeStatus = {editModeStatus}
                            /> 
                            : <ProfileData profile = { profile } 
                                isOwner = { isOwner }
                                activateEditMode = {() => { setEditMode(true) }}
                            />  
                        }
                    </div> 
                </div>
            </div>
    )
}

export default ProfileInfo;