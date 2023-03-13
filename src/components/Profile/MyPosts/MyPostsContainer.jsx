import React from 'react';
import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
    
    const addPost = () => {
        props.store.dispatch( addPostCreator() )
    };

    const onPostChange = (text) => {
        let action = updateNewPostTextCreator(text);
        props.store.dispatch( action )
    };
    
    return <MyPosts 
                updateNewPostText = { onPostChange } 
                addPost = { addPost } 
                profilePage= { props.store.getState().profilePage }
            />
}

export default MyPostsContainer;
