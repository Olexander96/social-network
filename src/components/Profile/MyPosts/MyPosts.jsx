import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';
import MyNewPostReduxForm from './MyNewPostReduxForm';


const MyPosts = (props) => {

    // shouldComponentUpdate(nextProps, nextState) { // те саме що і PureComponent (аби це була класова компонента)
    //     return nextProps !== this.props
    // } //а для функцыональної використовуєм memo
    
        let postsElements = props.profilePage.posts.map(p => <Post message={p.message} key={p.id} likesCount= {p.likesCount} profilePhoto = { props.profilePage.profile.photos.large  }/>); // з кожним елементом масиву створили компоненту
        
        const onAddPost = (values) => {
            props.addPost(values.newPost)
        };

        return (
            <div className={styles.postsBlock}>
                <h2>My Posts</h2>
                <MyNewPostReduxForm onSubmit={ onAddPost } />
                <div className={styles.posts}>
                    { postsElements }
                </div>
            </div>
        )
    
};


export default React.memo(MyPosts)
