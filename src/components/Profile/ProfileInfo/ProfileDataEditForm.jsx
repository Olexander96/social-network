import React from "react";
import { Textarea, createField } from "../../common/FormControls/FormControls";
import { Input } from "../../common/FormControls/FormControls";
import { reduxForm } from "redux-form";
import styles from './ProfileInfo.module.css';
import formStyles from "../../common/FormControls/FormControls.module.css";

const ProfileDataEditForm = ( {handleSubmit, profile, error, editModeStatus} ) => {
    return (
        <form  className={ styles.dataEditForm } onSubmit={ handleSubmit }>
            <button>Save</button>
            {error ? <div className={ formStyles.formErrorSummary }>{ error }</div> : null} 
            <label>
                Full name:
                { createField( Input, "Full name", "fullName", []) }
            </label>
            <label>
                About me:
                { createField( Textarea, "About me", "aboutMe", []) }
            </label>
            <label className={styles.jobCheck}>
                Looking for a job:
                { createField( Input, "", "lookingForAJob", [], {type: "checkbox"}) }
            </label>
            <label>
                My professional skills:
                { createField( Textarea, "My professional skills", "lookingForAJobDescription", []) }
            </label> 
            <div className={styles.contactsBlock}>
                <span>Contacts:</span> 
                { Object.keys(profile.contacts).map(key => {
                    return (
                        <label className={styles.contactItem} key={key}>
                            { key }
                            { createField(Input, key, "contacts." + key, []) }
                        </label>
                    )
                })}
            </div>
        </form>
    ) 
}

const ProfileDataEditReduxForm = reduxForm({form: "profile-form"})(ProfileDataEditForm)

export default ProfileDataEditReduxForm;
