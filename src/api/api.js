import axios from "axios"

const usersInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true, //ми авторизовані
    headers: {
        "API-KEY": "6bb9a208-a534-4bbe-b4e5-685b07d59613",
    }
                                                
});

const profileInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,                      
});

const authInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,                                         
});

const securityInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,                                         
});

const newsInstance = axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d3fc2a0829f64c50ac24157d98c18aa0",                                       
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
    },
    getStatus (userId) {
        return profileInstance.get(`profile/status/${ userId }`)
    },
    updateStatus (status) {
        return profileInstance.put(`profile/status/`, { status: status })
    },
    savePhoto (photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)//поміщаємо наш файл
        return profileInstance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data' //тому що інший формат
            }
        })
    },
    saveProfileData (profileFormData) {
        return profileInstance.put(`profile`, profileFormData) // profileFormData це цілий об'єкт який передали з форми
    },
    
};

export const authAPI = {
    authMe () {
        return authInstance.get(`auth/me`).then(response => response.data)
    },
    login (email, password, rememberMe, captcha = null) {
        return authInstance.post(`auth/login`, { email, password, rememberMe, captcha }).then(response => response.data)
    },
    logout () {
        return authInstance.delete(`auth/login`).then(response => response.data)
    }
};

export const securityAPI = {
    getCaptcha () {
        return securityInstance.get(`/security/get-captcha-url`)
    }
};

export const newsAPI = {
    getCurrentNews () {
        return newsInstance.get('').then(response => response.data)
    }
};









