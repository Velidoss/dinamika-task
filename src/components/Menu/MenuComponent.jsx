import React from 'react';
import { Menu } from 'antd';
import {NavLink} from 'react-router-dom';

const MenuComponent = () => (
  <Menu mode='horizontal' theme='dark'>
    <Menu.Item key={0}>
      <NavLink to='/'>
        Home
      </NavLink> 
    </Menu.Item>
    <Menu.Item key={1}>
      <NavLink to='/edit'>
        Edit
      </NavLink>
    </Menu.Item>
    <Menu.Item key={2}>
      <NavLink to='/about'>
        About
      </NavLink>
    </Menu.Item>
  </Menu>
);

export default MenuComponent;