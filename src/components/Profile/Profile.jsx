import React from 'react';
import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={p.content}>
            <div className={p.personal}>
                <img src='https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg' alt='content-bg'/>
                <div className={p.info}>
                    ava + description
                </div>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;
