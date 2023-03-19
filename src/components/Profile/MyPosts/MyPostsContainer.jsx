import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';


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
        updateNewPostText: (text) => {
            let action = updateNewPostTextCreator(text);
            dispatch( action )
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
