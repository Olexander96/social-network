import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileData from './ProfileData';
import ProfileDataEditForm from './ProfileDataEditForm';


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
                    <img src = { profile.photos.large || userPhoto } alt='user-avatar'/>
                    {isOwner ? <input type='file' onChange={ sendPhotoToServer }/> : null}
                    <ProfileStatusWithHooks status={ status } updateUserStatus = { updateUserStatus }/>
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
    )
}

export default ProfileInfo;