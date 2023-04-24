import React, { useState } from 'react';
import pi from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {

        let [editMode, setEditMode] = useState(false);
        let [currentStatus, setStatus] = useState(props.status);//тобто він примає значення початкове і в результаті setStatus може його міняти

        let activateEditMode = () => {
            setEditMode(true)
        };

        let deactivateEditMode = () => {
            setEditMode(false); //перемикає режим редагування 
            props.updateUserStatus(currentStatus) //відправляє статус для запису на сервак
        };

        const onChangedStatus = (event) => { // коли ми пічатаємо статус то він записується в status
            setStatus(event.currentTarget.value);
        };

        return (
            <div>
                {editMode  
                    ? <div>  
                        <input 
                            autoFocus={ true } 
                            onBlur={ deactivateEditMode } // коли натиснув поза інпутом
                            value={ currentStatus }
                            onChange={ onChangedStatus }
                        />
                      </div>
                    : <div>
                        <span 
                            className={pi.profileStatus} 
                            onDoubleClick={ activateEditMode } 
                        >{ props.status || "-------"}</span>
                      </div> //тут показуємо статус який прийде з стейта по API 
                }
            </div>
        )
}
    

export default ProfileStatusWithHooks;
