import { NavLink } from "react-router-dom";
import styles from './User.module.css';
import userPhoto from '../../assets/images/user.jpg'

const User = ( {user, followingInProgress, unfollowUser, followUser } ) => {
        
    return (
            <div key={user.id}>
                <div>
                    <NavLink to={`/profile/${ user.id}`}>
                        <img className={styles.photoUrl} 
                            src={user.photos.small === null ? user.photos.small = userPhoto : user.photos.small} 
                            alt='user'
                        />
                    </NavLink>
                                
                    {
                        user.followed 
                            ? <button disabled={ followingInProgress.some( id => id === user.id) } 
                                onClick={() => {
                                    unfollowUser(user.id)
                                }
                            }>Unfollow</button> 

                            : <button disabled={ followingInProgress.some( id => id === user.id) } 
                                onClick={() => {
                                    followUser(user.id)
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
        )
}

export default User;