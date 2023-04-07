import React from "react";
import styles from './User.module.css';
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from "react-router-dom";

const Users = (props) => {
        const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            if (pages.length < 30) { // бо дуже багато users
                pages.push(i)
            }
        }

        return (
            <div>
                <div>
                    {
                        pages.map(page => {
                           return <span className={props.currentPage === page ? styles.selectedPage : styles.page}
                            onClick={() => props.onChangePage(page) } key={page}>{ page }</span>
                        })
                    }
                </div>
                {
                    props.users.map(user => (
                        <div key={user.id}>
                            <div>
                                <NavLink to={`/profile/${ user.id}`}>
                                    <img className={styles.photoUrl} src={user.photos.small === null ? user.photos.small = userPhoto : user.photos.small} alt='user'/>
                                </NavLink>
                                
                                {
                                    user.followed 
                                    ? <button disabled={ props.followingInProgress.some( id => id === user.id) } onClick={() => {

                                        // props.toggleIsFollowingProgress(true, user.id)
                                            // usersAPI.unfollowUser(user.id).then(data => {
                                            //     if (data.resultCode === 0) { //якщо запит успішний то міняємо в стейті followed: false відповідному юсеру
                                            //         props.unfollow(user.id)
                                            //     }
                                            //     props.toggleIsFollowingProgress(false, user.id)
                                        // })

                                        props.unfollowUser(user.id)

                                        }
                                    }>Unfollow</button> 
                                    : <button disabled={ props.followingInProgress.some( id => id === user.id) } onClick={() => {

                                        // props.toggleIsFollowingProgress(true, user.id)
                                        //     usersAPI.followUser(user.id).then(data => {
                                        //         if (data.resultCode === 0) { //навпаки
                                        //             props.follow(user.id)
                                        //         }
                                        //         props.toggleIsFollowingProgress(false, user.id)
                                        //     })
                                        // }
                                        props.followUser(user.id)
                                        }
                                    }>Follow</button> 
                                }
                            </div>
                            <div>
                                <div>
                                    <span>{ user.name}</span>
                                    <span>{ user.status === null ? user.status = 'happy' : user.status}</span>
                                </div> 
                                <div>
                                    <span>{ "user.location.country" }</span>
                                    <span>{ "user.location.city" }</span>
                                </div> 
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }

export default Users;