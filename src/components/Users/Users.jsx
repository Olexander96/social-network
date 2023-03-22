import axios from "axios";
import React from "react";
import styles from './User.module.css';
import userPhoto from '../../assets/images/user.jpg'

class Users extends  React.Component  {
    // constructor(props) { //це відбувається автоматично, можна не писати це але потрібно розуміти, пишемо тільки тоді коли хочемо шось змінити
    //     super(props)
    //     this.props = props
    // }

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {this.props.setUsers(response.data.items)})
        }
    }
  
    render() {
        return this.props.users.map(user => (
                <div key={user.id}>
                    <div>
                        <img className={styles.photoUrl} src={user.photos.small === null ? user.photos.small = userPhoto : user.photos.small} alt='user'/>
                        {
                            user.followed 
                            ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button> 
                            : <button onClick={() => this.props.follow(user.id)}>Follow</button> 
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
}

export default Users;