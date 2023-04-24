import React from 'react'
import {AppBar, Toolbar,} from '@mui/material'; 
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111
    `;

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color:inherit;
    text-decoration: none;
    `;

const NavBar = () => {
  return (
    <Header position='static'> 
        <Toolbar>
            <Tabs to = '/'>Shivam Home</Tabs>
            <Tabs to = '/AllUsers'>All Users</Tabs>
            <Tabs to = '/AddUser'>Add User</Tabs>
        </Toolbar>
    </Header>
  )//The Appbar,Navlink component or tag replaced by styled component i.e. Header,Tabs//passing postion as a prop that is default postion in css
}

export default NavBar;