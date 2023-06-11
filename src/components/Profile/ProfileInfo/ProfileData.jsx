import React from "react";
import styles from './ProfileInfo.module.css';
import { ReactComponent as EditProfileDataIcon } from '../../../assets/images/profile/edit-status-icon.svg';

const ProfileData =( {profile, isOwner, themeType, activateEditMode} ) => {
    const contactsList = [];
    
    for (let key in profile.contacts) {
        if (profile.contacts[key]) {
            contactsList.push(<Contact key= {key} contactTitle = {key} contactValue = {profile.contacts[key]}/>)
        }
    }

    // const contactsList = Object.keys(profile.contacts).map(key => {
    //     if (profile.contacts[key]) {
    //         return <Contact key= {key} contactTitle = {key} contactValue = {profile.contacts[key]}/>
    //     }
    // });

    return (
        <div className={ styles.profileData }>
            <div className={ styles.profileEditBlock }>
                <h2>Profile info:</h2>
                { isOwner ? <EditProfileDataIcon className={styles.EditProfileDataIcon } onClick={ activateEditMode } /> : null }
            </div>
            <ul className={ styles.profileDataList }>
                <li>Full name: <span>{ profile.fullName }</span></li>
                <li>About me: <span>{ profile.aboutMe }</span></li>
                <li>Looking for a job: <span>{ profile.lookingForAJob ? "yes" : "no" }</span></li>
                { profile.lookingForAJob
                    ?<li>My professional skills: <span>{ profile.lookingForAJobDescription }</span></li>
                    : null
                }
            </ul>
            
            <div className={ styles.profileContacts }>
                <h3>Contacts:</h3>
                <ul className={ styles.profileContactsList }>
                    { contactsList }
                </ul> 
            </div>
        </div>
    ) 
}

const Contact = ( {contactTitle, contactValue} ) => {
    return (
        <li className={styles.contactItem}>{ contactTitle }: <span>{ contactValue }</span></li>
    )
}

export default ProfileData;