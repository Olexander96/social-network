import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount= {m.likesCount}/>); // з кожним елементом масиву створили компоненту
    
    const newPostElement = React.createRef();

    const addPost = () => {
        props.addPost()
    };

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }
    
    return (
        <div className={m.postsBlock}>
            <div className={m.writePost}>
                <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText}></textarea>
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
