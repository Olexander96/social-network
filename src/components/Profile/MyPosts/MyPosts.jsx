import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';
import MyNewPostReduxForm from './MyNewPostReduxForm';
import classNames from 'classnames';


const MyPosts = (props) => {

    // shouldComponentUpdate(nextProps, nextState) { // те саме що і PureComponent (аби це була класова компонента)
    //     return nextProps !== this.props
    // } //а для функцыональної використовуєм memo

        const onAddPost = (values) => {
            props.addPost(values.newPost)
        };

        const onDeletePost = (id) => {
            props.deletePost(id)
        };


        let postsElements = props.profilePage.posts.map(p => 
            <Post message = {p.message} 
                key = {p.id} 
                likesCount = {p.likesCount} 
                profilePhoto={props.profilePage.profile ? props.profilePage.profile.photos.large : null}
                onDeletePost = { onDeletePost }
                postId = {p.id}
                themeType = { props.themeType }
            />); // з кожним елементом масиву створили компоненту

        
        return (
            <div className={ classNames(styles.postsBlock, {[styles.postsDarkBlock]: props.themeType === 'DARK'}) }>
                <h2>My Posts</h2>
                <MyNewPostReduxForm onSubmit={ onAddPost } />
                <div className={styles.posts}>
                    { postsElements }
                </div>
            </div>
        )
    
};


export default React.memo(MyPosts)
