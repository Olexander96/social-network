import React from 'react';
import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';


const MyPostsContainer = (props) => {
    
    return (
        <StoreContext.Consumer> 
            {value => {
                const addPost = () => {
                    value.dispatch( addPostCreator() )
                };
            
                const onPostChange = (text) => {
                    let action = updateNewPostTextCreator(text);
                    value.dispatch( action )
                };
                
                return <MyPosts updateNewPostText = { onPostChange } 
                                addPost = { addPost } 
                                profilePage= { value.getState().profilePage }/>
            }
        }
    </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
