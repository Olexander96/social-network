import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import pi from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.jpg';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } 
    
    return (
            <div>
                {/* <div className={pi.imageBlock}>
                    <img src='https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg' alt='content-bg'/>
                </div> */}
                <div className={pi.descriptionBlock}>
                    { props.profile.photos.large != null 
                        ? <img src = { props.profile.photos.large } alt='user-avatar'/>
                        : <img src = { userPhoto } alt='user-avatar'/>
                    }
                    <div>
                        <span>{ props.profile.fullName }</span>
                    </div>
                    <ProfileStatus status="Hello my friends"/>
                    <div>
                        <span>{ props.profile.aboutMe }</span>
                    </div>
                </div>
            </div>
        )
    }

export default ProfileInfo;
