import React from "react";
import Paginator from "../common/Paginator/Paginator";
import styles from './UsersContainer.module.css'
import User from "./User";

const Users = (props) => {
        
        return (
            <div className={ styles.usersBlock }>
                <Paginator className={styles.usersPaginator}
                    themeType = {props.themeType}
                    totalItemsCount = {props.totalItemsCount} 
                    pageSize = {props.pageSize} 
                    currentPage = { props.currentPage}
                    onChangePage = { props.onChangePage }
                    portionSize = { props.portionSize }
                />
                <div className={styles.usersList}>
                    {
                        props.users.map(u => (
                            <User themeType = {props.themeType}
                                key={u.id}
                                user = {u} 
                                followingInProgress = {props.followingInProgress} 
                                unfollowUser = {props.unfollowUser} 
                                followUser = { props.followUser }
                            />
                        ))
                    }
                </div>
            </div>
        )
    }

export default Users;