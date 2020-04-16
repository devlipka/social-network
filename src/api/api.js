import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '9a12f1bc-89a7-4955-a65c-8841e4a32cf3',
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
          return response.data;
        }); 
    },

    auth(){
        return instance.get(`auth/me`)
        .then(response => {
            return response.data;
        }); 
    },

    getUserProfileById(userId){
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            });
    },

    unfollow(userId){
        return instance.delete(`follow/` + userId)
            .then(response => {
                return response.data;
            });
    },
    
    follow(userId){
        return instance.post(`follow/` + userId)
            .then(response => {
                return response.data;
            });
    }
}

export const profileAPI = {
    getUserProfileById(userId){
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            });
    },
    getStatus(userId){
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status){
        return instance.put('profile/status', { status: status, })
    }
}

