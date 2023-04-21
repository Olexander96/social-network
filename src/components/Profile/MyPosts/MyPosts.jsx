import React from 'react';
import Post from './Post/Post';
import m from './MyPosts.module.css';
import MyNewPostReduxForm from './MyNewPostReduxForm';


const MyPosts = (props) => {
    const postsElements = props.profilePage.posts.map(p => <Post message={p.message} key={p.id} likesCount= {p.likesCount}/>); // з кожним елементом масиву створили компоненту

    const onAddPost = (values) => {
        props.addPost(values.newPost)
    };

    return (
        <div className={m.postsBlock}>
            <MyNewPostReduxForm onSubmit={ onAddPost } />
            <div className={m.posts}>
                { postsElements }
            </div>
        </div>
    )
};


export default MyPosts;
