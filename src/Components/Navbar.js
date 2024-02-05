import React from 'react';
import Logo from '../assets/images/logo.svg'
import {BsCart2} from "react-icons/bs";
import {HideOutBars3} from "react-icons/hi2";
import {Box, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import{
Box,
Driver,
ListItem,
ListItemButton,
ListItemIcon,
ListItemText,}
from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import RegisterIcon from "@mui/icons-material/AppRegistrationRounded"


const Navbar = () => {
  
        const [OpenMenu, setOpenMenu ] = useState(false);
        const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"About",
            icon:<InfoIcon/>
        },
        {
            text:"Comments",
            icon:<CommentRoundedIcon/>
        },
        {
            text:"Register",
            icon:<RegisterIcon/>
        },
    ]

  return <div>Navbar</div>
}

export default Navbar;
