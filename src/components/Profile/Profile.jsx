import React from 'react';
import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={p.content}>
            <img src='https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg' alt='content-bg'/>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;
