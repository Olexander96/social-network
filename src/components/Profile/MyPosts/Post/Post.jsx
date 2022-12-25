import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4JmSLi5dZYfNLYBW-LtPGbN4W571XtNMVQ&usqp=CAU" alt="avatar"/>
            <span>{props.message}</span>
            <span>like {props.likes}</span>
        </div>
    )
}

export default Post;
