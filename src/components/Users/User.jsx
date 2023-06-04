import { NavLink } from "react-router-dom";
import styles from './User.module.css';
import userPhoto from '../../assets/images/user.png';
import classNames from 'classnames';

const User = ( {user, followingInProgress, unfollowUser, followUser, themeType } ) => {
        
    return (
            <div className={ classNames(styles.userBlock, {[styles.userBlockDark]: themeType === 'DARK'}) } key={user.id}>
                <NavLink to={`/profile/${ user.id}`}>
                    <img className={styles.photoUrl} src={user.photos.small || userPhoto} alt='user' />
                </NavLink>
                {
                    user.followed 
                        ? <button className={styles.unfollowButton}
                            disabled={ followingInProgress.some( id => id === user.id) } 
                            onClick={() => { unfollowUser(user.id) }
                        }>Unfollow</button> 

                        : <button className={styles.followButton}
                            disabled={ followingInProgress.some( id => id === user.id) } 
                            onClick={() => {followUser(user.id)}
                        }>Follow</button> 
                }
                <ul className={ styles.userList } >
                    <li>Name: { user.name}</li>
                    <li>Status: { user.status === null ? user.status = '-----' : user.status}</li>
                </ul>
            </div>
        )
}

export default User;