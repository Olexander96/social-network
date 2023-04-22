import React from 'react';
import Users from './Users';
import styles from './UsersContainer.module.css';
import {connect} from 'react-redux';
import { setCurrentPage, getUsers, unfollowUser, followUser } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersList } from '../../redux/users-selectors';

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

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: getUsersList(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default connect(mapStateToProps, {setCurrentPage, getUsers, unfollowUser, followUser})(UsersContainer);