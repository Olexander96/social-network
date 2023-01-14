import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={m.main}>
            <div className={m.write_post}>
                <textarea name="" id="" cols="30" rows="3"></textarea>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
            <div className={m.posts}>
                <Post message='Hi, how are you?' likes='10'/>
                <Post message='It is my first post' likes='15'/>
            </div>
        </div>
    )
}

export default MyPosts;
