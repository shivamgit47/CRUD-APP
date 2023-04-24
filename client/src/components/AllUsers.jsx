import React, { useEffect, useState } from 'react'
import {Table,TableBody,TableHead,TableRow,TableCell, Button} from '@mui/material';

import { Link } from 'react-router-dom';
import { getUsers,deleteTheUser } from '../service/api';
import styled from '@emotion/styled';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`
const THead = styled(TableRow)`
    background: #000000;
    & > th {
      color : #fff;
      font-size: 20px;
    }
`
const TBody = styled(TableRow)`
    & > td {
      font-size: 20px;
    }
`

const AllUsers = () => {

  const[users,setUsers] = useState([]);

  useEffect(()=>{
    getAllUsers();
  },[]);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
    console.log(response.data);
  }

  const deleteUserDetails = async (id) => {
    await deleteTheUser(id);//user._id arguement is passed here as a arguement as id
    getAllUsers();
  }
  
  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Update/Delete</TableCell>
        </THead>
      </TableHead>
      <TableBody>
          {
            users.map((val,index)=> {
              return <TBody key={val._id}>
                        <TableCell>{val._id}</TableCell>
                        <TableCell>{val.name}</TableCell>
                        <TableCell>{val.username}</TableCell>
                        <TableCell>{val.email}</TableCell>
                        <TableCell>{val.phone}</TableCell>
                        <TableCell>
                            <Button variant='contained' color='success' style={{marginRight :20}} component={Link} to={`/EditUser/${val._id}`}>Edit</Button>

                            <Button variant='contained' color='secondary' onClick={()=> deleteUserDetails(val._id)} >Delete</Button>
                        </TableCell>
                      </TBody>
              })
          }
      </TableBody>
    </StyledTable>
  )
}

export default AllUsers