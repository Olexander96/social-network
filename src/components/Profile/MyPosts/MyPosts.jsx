import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount= {m.likesCount}/>); // з кожним елементом масиву створили компоненту
    
    const newPostElement = React.createRef();
    const addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }
    
    return (
        <div className={m.postsBlock}>
            <div className={m.writePost}>
                <textarea ref={ newPostElement } name="" id="" cols="30" rows="3"></textarea>
                <div>
                    <button onClick={ addPost }>Add Post</button>
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
