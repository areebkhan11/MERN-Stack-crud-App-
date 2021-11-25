
import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";


const useStyle = makeStyles ({
    header:{
        background: '#111111'
    },
    tabs:{
        color: '#ffffff',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    }
})

const NavBar = ()=>{
    const classes = useStyle();
    return (    
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} exact to="/" > CRUD APPLICATION </NavLink>
                <NavLink className={classes.tabs} exact to="/AllUsers" > ALL USER </NavLink>
                <NavLink className={classes.tabs} exact to="/AddUser" > ADD USERs </NavLink>
           </Toolbar>
        </AppBar>
    );
}

export default NavBar;