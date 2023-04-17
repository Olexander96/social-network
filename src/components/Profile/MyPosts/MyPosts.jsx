import React from 'react';
import m from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const currentMaxLength  = maxLength(15); //бо на пряму не працює

const MyPosts = (props) => {
    const postsElements = props.profilePage.posts.map(p => <Post message={p.message} key={p.id} likesCount= {p.likesCount}/>); // з кожним елементом масиву створили компоненту

    const onAddPost = (values) => {
        props.addPost(values.newPost)
    };

    // const onPostChange = (event) => { ////використовували раніше, щоб оновлювати стейт коли друкуємо текст посту
    //     let text = event.target.value; // взяли текст з textarea
    //     props.updateNewPostText( text )
    // };
    
    return (
        <div className={m.postsBlock}>
            <MyNewPostReduxForm onSubmit={ onAddPost }/>
            <div className={m.posts}>
                { postsElements }
            </div>
        </div>
    )
};

const MyNewPostForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={m.writePost}>
            <Field component={ Textarea } 
                    name={ "newPost" }
                    validate={ [required, currentMaxLength] }   //всі функції які валідують
                    placeholder='Post message'
            />
            <div>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
        </form>
    )
};

const MyNewPostReduxForm = reduxForm({form: "post"})(MyNewPostForm);
    
export default MyPosts;
