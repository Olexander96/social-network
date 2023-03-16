import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';


// const MyPostsContainer = (props) => {
    
//     return (
//         <StoreContext.Consumer> 
//             {value => {
//                 const addPost = () => {
//                     value.dispatch( addPostCreator() )
//                 };
            
//                 const onPostChange = (text) => {
//                     let action = updateNewPostTextCreator(text);
//                     value.dispatch( action )
//                 };
                
//                 return <MyPosts updateNewPostText = { onPostChange } 
//                                 addPost = { addPost } 
//                                 profilePage= { value.getState().profilePage }/>
//             }
//         }
//     </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch( addPostCreator() )
        },
        onPostChange: (text) => {
            let action = updateNewPostTextCreator(text);
            dispatch( action )
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
