import axios from 'axios';

const url = 'http://localhost:9000/users';

export const getUsers = async (id) =>{
    id = id || '';
    return await axios.get(`${url}/${id}`);

}

export const addUser = async (user) =>{
    return await axios.post(`${url}/add`, user);

}

export const editUsers = async (id, user) =>{
    id = id || '';
    return await axios.get(`${url}/${id}`, user);

}

export const deleteUser = async (id) =>{
    id = id || '';
    return await axios.delete(`${url}/${id}`);

}