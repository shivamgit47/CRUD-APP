import axios from 'axios';

const URL = 'http://localhost:8000';
export const addUser = async (data) => {
    
    try{
       return await axios.post(`${URL}/AddUser`,data)
    } catch(error) 
    {
        console.log("Error while calling add user API" ,error)    
    }
}

export const getUsers = async () => {

    try{
        return await axios.get(`${URL}/AllUsers`)
    } catch(error)
    {
        console.log("Error while calling getUsers API",error)
    }
}

export const getUser = async (id) => {

    try{
        return await axios.get(`${URL}/${id}`)
    } catch(error)
    {
        console.log("Error while calling getUsers API",error)
    }
}

export const editUser = async (user,id) => {
    
    try{
       return await axios.put(`${URL}/${id}`,user)// post also works same like put ,put is for update
    } catch(error) 
    {
        console.log("Error while calling edit user API" ,error)    
    }
}

export const deleteTheUser = async (id) =>{
    try{
        return await axios.delete(`${URL}/${id}`)
    }  catch (error)
    {
        console.log("Error while calling delete user API" ,error)
    }
}