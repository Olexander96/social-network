import React from 'react';
import Users from './Users';
import styles from './UsersContainer.module.css';
import {connect} from 'react-redux';
import { follow, 
        unfollow, 
        setUsers, 
        setCurrentPage, 
        setTotalUsersCount, 
        toggleIsFetching 
} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';
import { toggleIsFollowingProgress } from '../../redux/users-reducer';

class UsersContainer extends  React.Component  {

    componentDidMount() {
            this.props.toggleIsFetching(true);

            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => { //axios 
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
        
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => { // axios (api.js)
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            })
    }
  
    render() {
        return <div className={styles.usersPage}>
                {this.props.isFetching ? <Preloader/> : null} 
                <Users totalUsersCount = { this.props.totalUsersCount }
                        pageSize = { this.props.pageSize }
                        currentPage = { this.props.currentPage }
                        onChangePage = { this.onChangePage }
                        users = { this.props.users }
                        follow = { this.props.follow }
                        unfollow = { this.props.unfollow }
                        followingInProgress = { this.props.followingInProgress }
                        toggleIsFollowingProgress = { this.props.toggleIsFollowingProgress } 
                    />
                </div> 
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// const mapDispatchToProps = (dispatch) => {//так робили раніше шоб показати що дані колбеки запускають екшн кріейтори які потім працюють в редюсері 
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalUsers) => {
//             dispatch(setTotalUsersCountAC(totalUsers))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

const mapDispatchToProps = {
    follow, // follow: (userId) => {dispatch(followAC(userId))}, //те саме бо так працює connect()
    unfollow, 
    setUsers, 
    setCurrentPage, 
    setTotalUsersCount, 
    toggleIsFetching,
    toggleIsFollowingProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);