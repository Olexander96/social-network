import React from "react";
import styles from './ProfileInfo.module.css';

const ProfileData =( {profile, isOwner, activateEditMode} ) => {
    return (
        <div>
            { isOwner ? <button onClick={ activateEditMode }>Edit</button> : null }
            <div>
                <span>Full name: { profile.fullName }</span>
            </div>
            <div>
                <span>About me: { profile.aboutMe }</span>
            </div>
            <div>
                <span>Looking for a job: { profile.lookingForAJob ? "yes" : "no" }</span>
            </div>
            {
            profile.lookingForAJob
                ? <div>
                    <span>My professional skills: { profile.lookingForAJobDescription }</span>
                </div> 
                : null
            }
            <div>
                <span>Contacts: { Object.keys(profile.contacts).map(key => {
                    return <Contact key= {key} contactTitle = {key} contactValue = {profile.contacts[key]}/>
                })}</span>
            </div>
        </div>
    ) 
}

const Contact = ( {contactTitle, contactValue} ) => {
    return (
        <div className={styles.contactItem}>{ contactTitle }: { contactValue }</div>
    )
}

export default ProfileData;