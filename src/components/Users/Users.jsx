import React from "react";
import styles from './User.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, followed: false, photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                fullName: "Ann", status: "i am a Boss", location: {country: "Ukraine", city: "Kyiv"}
            },
            {id: 2, followed: true, photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                fullName: "Olga", status: "i am a Boss too", location: {country: "Ukraine", city: "Vinnytsia"}
            },
            {id: 3, followed: false, photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                fullName: "Nastya", status: "i am a Boss big", location: {country: "Ukraine", city: "Zhutomyr"}
            }
        ])
    }
    
    return (
        props.users.map(user => (
            <div key={user.id}>
                <div>
                    <img className={styles.photoUrl} src={user.photoUrl} alt='user'/>
                    {
                        user.followed 
                        ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button> 
                        : <button onClick={() => props.follow(user.id)}>Follow</button> 
                    }
                </div>
                <div>
                    <div>
                        <span>{ user.fullName }</span>
                        <span>{ user.status }</span>
                    </div> 
                    <div>
                        <span>{ user.location.country }</span>
                        <span>{ user.location.city }</span>
                    </div> 
                </div>
            </div>
        ))
    )
}

export default Users;