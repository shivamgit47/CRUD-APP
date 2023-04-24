import React, { useState } from 'react';
import { FormControl,FormGroup, InputLabel,Input, Typography, Button} from '@mui/material';
import styled from '@emotion/styled';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';

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

const AddUser = () => {

    const[user,setUser]=useState(defaultValue); //passing an empty object {} or an empty object with specific empty values
  
    const navigate = useNavigate();

    const onValueChange = (e) =>{
        console.log(e.target.name,e.target.value);
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })//spread so it doesnt override values,e.target.name in [] bec  key : values both are variable ,we need to put key in []
        console.log(user);
    }
    const addUserDetails = async () =>{
        await addUser(user);//passing arguement into the component function into data parameter
        navigate('/AllUsers')
    }

  return (    
    <Container>
    <p>{JSON.stringify(user)}</p>
    <Typography variant='h4'>Add Users</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={onValueChange} name='name'/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={onValueChange} name='username'/>
        </FormControl>  
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={onValueChange} name='email'/>
        </FormControl>  
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={onValueChange} name='phone'/>
        </FormControl>
        <FormControl>
            <Button variant='contained' onClick={addUserDetails}>Add User</Button>
        </FormControl>       
    </Container>
  )//FormControl is internally just a <div>,//Typography is just an p tag converted into h4 tag//{(e)=>onValueChange(e)} is same as {onValueChange}
}

export default AddUser;