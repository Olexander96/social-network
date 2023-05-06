import React from "react";
import { Textarea, createField } from "../../common/FormControls/FormControls";
import { Input } from "../../common/FormControls/FormControls";
import { reduxForm } from "redux-form";
import styles from './ProfileInfo.module.css';
import formStyles from "../../common/FormControls/FormControls.module.css";

const ProfileDataEditForm = ( {handleSubmit, profile, error, editModeStatus} ) => {
    return (
        <form onSubmit={ handleSubmit }>
            <button >Save</button>
            {error ? <div className={ formStyles.formErrorSummary }>{ error }</div> : null} 
            <div>
                <span>Full name:</span>
                { createField( Input, "Full name", "fullName", []) }
            </div>
            <div>
                <span>About me:</span>
                { createField( Textarea, "About me", "aboutMe", []) }
            </div>
            <div>
                <span>Looking for a job:</span>
                { createField( Input, "", "lookingForAJob", [], {type: "checkbox"}) }
            </div>
            <div>
                <span>My professional skills:</span>
                { createField( Textarea, "My professional skills", "lookingForAJobDescription", []) }
            </div> 
            <div>
                <span>Contacts: { Object.keys(profile.contacts).map(key => {
                    return (
                        <div className={styles.contactItem} key={key}>
                            <span>{key}</span>
                            { createField(Input, key, "contacts." + key, []) }
                        </div>
                    )
                })}</span>
            </div>
        </form>
    ) 
}

const ProfileDataEditReduxForm = reduxForm({form: "profile-form"})(ProfileDataEditForm)

export default ProfileDataEditReduxForm;
