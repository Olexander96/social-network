import React from 'react';
import pi from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div>
            <div className={pi.imageBlock}>
                <img src='https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg' alt='content-bg'/>
            </div>
            <div className={pi.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
