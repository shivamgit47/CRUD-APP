import React, { useEffect, useState } from 'react';
import { FormControl,FormGroup, InputLabel,Input, Typography, Button} from '@mui/material';
import styled from '@emotion/styled';
import { editUser, getUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
    }
`
const defaultValue = {
    name:'',
    username:'',
    email:'',
    phone:''
}

const EditUser = () => {

    const[user,setUser]=useState(defaultValue); //passing an empty object {} or an empty object with specific empty values
    console.log(user)
    const navigate = useNavigate();

    const {id} = useParams();//useParams returns an object of key/value pairs of URL parameters,used it to access the params i.e id of current <Route/>

    useEffect(()=>{
        loadUserDetails();
    },[]);

    const loadUserDetails =  async () => {
        const response = await getUser(id);
        setUser(response.data)
    }

    const onValueChange = (e) =>{
        console.log(e.target.name,e.target.value);
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })//spread so it doesnt override values,e.target.name in [] bec  key : values both are variable ,we need to put key in []
        console.log(user);
    }
    const editUserDetails = async () =>{
        await editUser(user ,id);//passing arguement into the component function into data parameter
        navigate('/AllUsers')
    }

  return (    
    <Container>
    <p>{JSON.stringify(user)}</p>
    <Typography variant='h4'>Edit Users</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={onValueChange} name='name' value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={onValueChange} name='username' value={user.username}/>
        </FormControl>  
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={onValueChange} name='email' value={user.email}/>
        </FormControl>  
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={onValueChange} name='phone' value={user.phone}/>
        </FormControl>
        <FormControl>
            <Button variant='contained' onClick={editUserDetails}>Edit</Button>
        </FormControl>       
    </Container>
  )//FormControl is internally just a <div>,//Typography is just an p tag converted into h4 tag//{(e)=>onValueChange(e)} is same as {onValueChange}
}

export default EditUser;