import React from 'react'
import {Link}  from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import '../styles/linker.css';

export default function Linker() {
    
 

    return (
        <div className="links">
        <NavLink className='linkstyle' exact={true} to="/" >Profile</NavLink> 
        <NavLink className='linkstyle' to="/achievements" >Achievements</NavLink>
        <NavLink className='linkstyle' to="/gallery" >Gallery</NavLink>
        <NavLink className='linkstyle' to="/resume" >Resume</NavLink>
        <NavLink className='linkstyle' to="/contact" >Contact</NavLink>
        </div>
        )
    }
    