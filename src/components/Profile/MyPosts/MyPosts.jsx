import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsElements = props.profilePage.posts.map(p => <Post message={p.message} key={p.id} likesCount= {p.likesCount}/>); // з кожним елементом масиву створили компоненту

    const onAddPost = () => {
        props.addPost()
    };

    const onPostChange = (event) => {
        let text = event.target.value; // взяли текст з textarea
        props.updateNewPostText( text )
    };
    
    return (
        <div className={m.postsBlock}>
            <div className={m.writePost}>
                <textarea onChange={ onPostChange } value={ props.profilePage.newPostText }></textarea>
                <div>
                    <button onClick={ onAddPost }>Add Post</button>
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
