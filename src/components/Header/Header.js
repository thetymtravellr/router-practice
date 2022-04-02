import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = () => {

    return (
        <div>
            <h2>Welcome to TShirt mania!!!</h2>
        <nav>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/orderreview'>Order Riview</CustomLink>
            <CustomLink to='/grandpa'>Grandpa</CustomLink>
            {/* <NavLink
            style={({ isActive }) => {
                return { 
                    color: isActive ? 'red' : '',
                }
            }}
            to='/home'
            >Home</NavLink>
            <NavLink
            style={({ isActive }) => {
                return { 
                    color: isActive ? 'red' : '',
                }
            }}
            to='/orderreview'
            >Order Review</NavLink> */}
        </nav>
        </div>
    );
};

export default Header;