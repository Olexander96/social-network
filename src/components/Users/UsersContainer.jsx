import React from 'react';
import axios from 'axios';
import Users from './Users';
import styles from './UsersContainer.module.css';
import {connect} from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC} from '../../redux/users-reducer'
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends  React.Component  {

    componentDidMount() {
            this.props.toggleIsFetching(true);

            axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
        
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
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
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsers) => {
            dispatch(setTotalUsersCountAC(totalUsers))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);