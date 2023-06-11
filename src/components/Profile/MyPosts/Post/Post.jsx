import React, { useState } from 'react';
import styles from './Post.module.css';
import {ReactComponent as LikesIcon} from '../../../../assets/images/profile/likes-icon.svg';
import {ReactComponent as DeletePostIcon} from '../../../../assets/images/profile/post-delete-icon.svg';
import classNames from 'classnames';

const Post = (props) => {

    const [deleteStatus, changeDeleteStatus] = useState(false);

    
    const deleteCurrentPost = (id) => {
        props.onDeletePost(id);
    };

    // useEffect(() => {
    //     const timer = setTimeout(deleteCurrentPost(id), 3000);
    //     return () => clearTimeout(timer);
    //   }, []);

    return (
        <div className={ classNames(
                styles.item, 
                {
                    [styles.itemDeleting]: deleteStatus === true,
                    [styles.itemDark]: props.themeType === 'DARK'
                }
            ) }>
            <img src={ props.profilePhoto } alt="avatar"/>
            <span className={styles.text} >{props.message}</span>
            <div className={styles.rightBlock} >
                <div className={ styles.likesBlock }>
                    <LikesIcon className={ styles.likesIcon }/>
                    <span>{props.likesCount}</span>
                </div>
                <DeletePostIcon className={styles.deletePostIcon} 
                    onClick= { 
                        () => {
                            changeDeleteStatus(true);
                            deleteCurrentPost(props.postId);
                        }
                    }
                    
                />
            </div>
        </div>
    )
}

export default Post;
