import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';

const posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 10},
    {id: 2, message: "It is my first post", likesCount: 15}
];

const postsElements = posts.map(p => <Post message={p.message} likesCount= {m.likesCount}/>);

const MyPosts = (props) => {
    return (
        <div className={m.postsBlock}>
            <div className={m.writePost}>
                <textarea name="" id="" cols="30" rows="3"></textarea>
                <div>
                    <button>Add Post</button>
                    <button>Remove Post</button>
                </div>
            </div>
            <div className={m.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;
