import MyPosts from './MyPosts';
import { addPostCreator} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch( addPostCreator(newPost) )
        },
        // updateNewPostText: (text) => {
        //     let action = updateNewPostTextCreator(text);
        //     dispatch( action )
        // }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
