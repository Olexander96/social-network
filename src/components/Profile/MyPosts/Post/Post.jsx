import React from 'react';
import styles from './Post.module.css';
import {ReactComponent as LikesIcon} from '../../../../assets/images/profile/likes-icon.svg';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src={ props.profilePhoto } alt="avatar"/>
            <span>{props.message}</span>
            <div className={ styles.likesBlock }>
                <LikesIcon className={ styles.likesIcon }/>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;
