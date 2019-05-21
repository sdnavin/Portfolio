import React from 'react'
import {Link}  from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import '../styles/linker.css';

export default function Linker() {
    
 

    return (
        <div className="links">
        <NavLink className='linkstyle' exact={true} to={process.env.PUBLIC_URL+"/"} >Profile</NavLink> 
        <NavLink className='linkstyle' to={process.env.PUBLIC_URL+"/achievements"} >Achievements</NavLink>
        <NavLink className='linkstyle' to={process.env.PUBLIC_URL+"/gallery"} >Gallery</NavLink>
        <NavLink className='linkstyle' to={process.env.PUBLIC_URL+"/resume"} >Resume</NavLink>
        <NavLink className='linkstyle' to={process.env.PUBLIC_URL+"/contact"} >Contact</NavLink>
        </div>
        )
    }
    