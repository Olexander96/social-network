import React from 'react';
import Users from './Users';
import styles from './UsersContainer.module.css';
import {connect} from 'react-redux';
import { setCurrentPage, getUsers, unfollowUser, followUser } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends  React.Component  {

    componentDidMount() {
        // this.props.toggleIsFetching(true);

            // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => { //axios 
            //     this.props.toggleIsFetching(false);
            //     this.props.setUsers(data.items);
            //     this.props.setTotalUsersCount(data.totalCount);
        // })
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        
    }

    onChangePage = (pageNumber) => {
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);

        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => { // axios (api.js)
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //     })
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
  
    render() {
        return <div className={styles.usersPage}>
                {this.props.isFetching ? <Preloader/> : null} 
                <Users totalUsersCount = { this.props.totalUsersCount }
                        pageSize = { this.props.pageSize }
                        currentPage = { this.props.currentPage }
                        onChangePage = { this.onChangePage }
                        users = { this.props.users }
                        // follow = { this.props.follow } // в санку пішло followUser
                        // unfollow = { this.props.unfollow } // в санку пішло unfollowUser
                        followingInProgress = { this.props.followingInProgress }
                        // toggleIsFollowingProgress = { this.props.toggleIsFollowingProgress } // в санку пішло
                        unfollowUser = { this.props.unfollowUser }
                        followUser = { this.props.followUser }
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

// const mapDispatchToProps = {
//     follow, // follow: (userId) => {dispatch(followAC(userId))}, //те саме бо так працює connect()
//     unfollow, 
//     setUsers, 
//     setCurrentPage, 
//     setTotalUsersCount, 
//     toggleIsFetching,
//     toggleIsFollowingProgress
// }

export default connect(mapStateToProps, {setCurrentPage, getUsers, unfollowUser, followUser})(UsersContainer);