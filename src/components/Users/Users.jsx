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
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
        }
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {this.props.setUsers(response.data.items)})
    }
  
    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                           return <span className={this.props.currentPage === page ? styles.selectedPage: styles.page}
                            onClick={() => this.onChangePage(page) }>{ page }</span>
                        })
                    }
                </div>
                {
                    this.props.users.map(user => (
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
            </div>
        )
    }
}

export default Users;