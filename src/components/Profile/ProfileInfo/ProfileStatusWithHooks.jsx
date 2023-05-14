import React, { useEffect, useState } from 'react';
import styles from './ProfileInfo.module.css';
import { ReactComponent as EditStatusIcon } from '../../../assets/images/profile/edit-status-icon.svg';


const ProfileStatusWithHooks = (props) => {

        let [editMode, setEditMode] = useState(false);
        let [currentStatus, setStatus] = useState(props.status);//тобто він примає значення початкове і в результаті setStatus може його міняти
        useEffect(() => {
            setStatus(props.status)
        }, [props.status])

        const activateEditMode = () => {
            setEditMode(true)
        };

        const deactivateEditMode = () => {
            setEditMode(false); //перемикає режим редагування 
            props.updateUserStatus(currentStatus) //відправляє статус для запису на сервак
        };

        const onChangedStatus = (event) => { // коли ми пічатаємо статус то він записується в status
            setStatus(event.currentTarget.value);
        };

        return (
            <div className= {styles.status}>
                {editMode  
                    ? <input 
                            autoFocus={ true } 
                            onBlur={ deactivateEditMode } // коли натиснув поза інпутом
                            value={ currentStatus }
                            onChange={ onChangedStatus }
                        />
                     
                    : <div>
                        <span>{ props.status || "-------"}</span>
                        <EditStatusIcon onClick={ activateEditMode } className={styles.statusIcon}/>
                      </div>//тут показуємо статус який прийде з стейта по API 
                }
            </div>
        )
}
    

export default ProfileStatusWithHooks;
