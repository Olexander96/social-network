import React from "react";
import styles from './User.module.css';
import userPhoto from '../../assets/images/user.jpg'

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
                                <img className={styles.photoUrl} src={user.photos.small === null ? user.photos.small = userPhoto : user.photos.small} alt='user'/>
                                {
                                    user.followed 
                                    ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button> 
                                    : <button onClick={() => props.follow(user.id)}>Follow</button> 
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