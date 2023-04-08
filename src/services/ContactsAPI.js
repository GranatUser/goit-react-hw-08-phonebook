import axios from 'axios';

const _publicHost = axios.create({
    baseURL:"https://connections-api.herokuapp.com/"
});
const _privateHost = axios.create({
    baseURL:"https://connections-api.herokuapp.com/"
});

const authInterceptor = config =>{
    config.headers['Authorization']= localStorage.getItem('token');
    return config;
}
_privateHost.interceptors.request.use(authInterceptor);

export const UserAPI = {
    login: async(formData)=>{
        const {data} = await _publicHost.post('users/login',formData);
        return data;
    },
    register: async(formData)=>{
        const {data} = await _publicHost.post('users/signup',formData);
        return data;
    },
    logout: async()=>{
        const {data} = await _privateHost.post('users/logout');
        return data;
    },
    refresh: async()=>{
        const {data} = await _privateHost.get('users/current');
        return data;
    }
}

export const ContactsAPI = {
    getContacts: async()=>{
        const {data} = await _privateHost.get('contacts');
        return data;
},
addContact: async(formData)=>{
    const {data} = await _privateHost.post('contacts',formData);
    return data;
},
deleteContact: async(contactID)=>{
    const {data} = await _privateHost.delete(`contacts/${contactID}`);
    return data;
}
}