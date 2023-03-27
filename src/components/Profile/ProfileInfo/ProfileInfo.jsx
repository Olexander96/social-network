import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import pi from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } 
    
    return (
            <div>
                <div className={pi.imageBlock}>
                    <img src='https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg' alt='content-bg'/>
                </div>
                <div className={pi.descriptionBlock}>
                    <img src = { props.profile.photos.large} alt='user-avatar'/>
                    ava + description
                </div>
            </div>
        )
    }

export default ProfileInfo;
