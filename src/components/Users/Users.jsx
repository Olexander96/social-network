import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
        
        return (
            <div>
                <Paginator totalUsersCount = {props.totalUsersCount} 
                    pageSize = {props.pageSize} 
                    currentPage = { props.currentPage}
                    onChangePage = { props.onChangePage }
                />
                {
                    props.users.map(u => (
                        <User key={u.id}
                            user = {u} 
                            followingInProgress = {props.followingInProgress} 
                            unfollowUser = {props.unfollowUser} 
                            followUser = { props.followUser }
                        />
                    ))
                }
            </div>
        )
    }

export default Users;