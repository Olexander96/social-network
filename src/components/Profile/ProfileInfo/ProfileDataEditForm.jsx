import React from "react";
import { Textarea, createField } from "../../common/FormControls/FormControls";
import { Input } from "../../common/FormControls/FormControls";
import { reduxForm } from "redux-form";
import styles from './ProfileInfo.module.css';
import formStyles from "../../common/FormControls/FormControls.module.css";

const ProfileDataEditForm = ({ handleSubmit, profile, error, editModeStatus }) => {
    return (
        <form className={styles.dataEditForm} onSubmit={handleSubmit}>
            <div className={styles.mainFormBlock}>
                <div className={styles.aboutBlock}>
                    <span>Main info:</span>
                    {error ? <div className={formStyles.formErrorSummary}>{error}</div> : null}
                    <label>
                        <span>Full name</span>
                        {createField(Input, "Full name", "fullName", [])}
                    </label>
                    <label>
                        <span>About me:</span>
                        {createField(Textarea, "About me", "aboutMe", [])}
                    </label>
                    <label className={styles.jobCheck}>
                        <span>Looking for a job:</span>
                        {createField(Input, "", "lookingForAJob", [], { type: "checkbox" })}
                    </label>
                    <label>
                        <span>My professional skills:</span>
                        {createField(Textarea, "My professional skills", "lookingForAJobDescription", [])}
                    </label>
                </div>
                <div className={styles.contactsBlock}>
                    <span>Contacts:</span>
                    {Object.keys(profile.contacts).map(key => {
                        if (key !== 'vk' && key !== 'mainLink' && key !== 'twitter' && key !== 'youtube') {
                            return (
                                <label className={styles.contactItem} key={key}>
                                    <span>{key}</span>
                                    {createField(Input, key, "contacts." + key, [])}
                                </label>
                            )
                        } else return null
                    })}
                </div>
            </div>
            <button>Save</button>
        </form>
    )
}

const ProfileDataEditReduxForm = reduxForm({ form: "profile-form" })(ProfileDataEditForm)

export default ProfileDataEditReduxForm;
