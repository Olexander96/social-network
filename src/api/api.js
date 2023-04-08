import axios from "axios"

const usersInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true, //ми авторизовані
    headers: {
        "API-KEY": "c17569bc-d7ea-4eb5-8253-5b039",
    }
                                                
});

const profileInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",                       
});

const authInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,                                         
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 4) {
        return usersInstance
                    .get(`users?page=${ currentPage }&count=${ pageSize }`)
                    .then(response => response.data)
    },

    followUser (userID = 1) {
        return usersInstance
                .post(`follow/${ userID }`, {}) // в пост методы додається 2 об'єкти URL, {}, {withCredentials: true...}
                .then(response => response.data)
    },

    unfollowUser (userID = 1) {
        return usersInstance
                .delete(`follow/${ userID }`)//відправляємо запит про відписку
                .then(response => response.data)
    }
};

export const profileAPI = {
    getProfile (userId) {
        return profileInstance.get(`profile/${ userId }`).then(response => response.data)
    }
};

export const authAPI = {
    authMe () {
        return authInstance.get(`auth/me`).then(response => response.data)
    }
};






