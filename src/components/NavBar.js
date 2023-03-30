import React, { useEffect } from "react";
import {Nav, NavLink, WebTitle, Bars, NavMenu, NavBtnLink} from './StyledComponents/NavbarElements'
import { useAuth0 } from '@auth0/auth0-react'

function NavBar({ setUser, toggleSidebar }){

    const { loginWithRedirect, logout, user } = useAuth0();

    let activeUser = user
    
    useEffect(() => {
        setUser(activeUser)
    }, [activeUser])


    return(
        <>
            <Nav>
                <NavLink className="home-button" to="/">
                    <img className="logo" src={require('./../images/blogface_logo.png')} alt='logo' />
                    <WebTitle className="title" src={require('./../images/blogface_title.png')} alt='title' />
                </NavLink>
                <Bars onClick={toggleSidebar}/>
                <NavMenu>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    {user ? <><NavLink to="/profile">
                        My Profile
                    </NavLink>
                    <NavLink to="/new-post">
                        Create a Post
                    </NavLink></> : null}
                    {user ?  
                        <NavBtnLink onClick={() => logout() }>Sign Out</NavBtnLink> : 
                        <NavBtnLink onClick={() => loginWithRedirect() }to='/sign-in'>Sign In</NavBtnLink>
                    }
                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar