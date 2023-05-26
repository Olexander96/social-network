import MyPosts from './MyPosts';
import { addPostCreator, deletePostCreator} from '../../../redux/profile-reducer';
import { connect } from 'react-redux';


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
        deletePost: (id) => {
            dispatch( deletePostCreator(id) )
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
