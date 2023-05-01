import React from 'react';
import Users from './Users';
import styles from './UsersContainer.module.css';
import {connect} from 'react-redux';
import { setCurrentPage, getUsers, unfollowUser, followUser } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { getCurrentPage, getFollowingInProgress, getIsFetching, 
    getPageSize, getPortionSize, getTotalUsersCount, getUsersList } from '../../redux/selectors/users-selectors';

class UsersContainer extends  React.Component  {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onChangePage = (pageNumber) => {
        const { pageSize } = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }
  
    render() {
        return <div className={styles.usersPage}>
                {this.props.isFetching ? <Preloader/> : null} 
                <Users totalItemsCount = { this.props.totalItemsCount }
                        pageSize = { this.props.pageSize }
                        currentPage = { this.props.currentPage }
                        onChangePage = { this.onChangePage }
                        users = { this.props.users }
                        followingInProgress = { this.props.followingInProgress }
                        unfollowUser = { this.props.unfollowUser }
                        followUser = { this.props.followUser }
                        portionSize = { this.props.portionSize }
                    />
                </div> 
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersList(state), // це селектори
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state)
    }
}

export default connect(mapStateToProps, {setCurrentPage, getUsers, unfollowUser, followUser})(UsersContainer);