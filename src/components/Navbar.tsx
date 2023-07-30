import React, { FC, } from 'react'
import { LightModeOutlined,DarkModeOutlined,Menu as MenuIcon,Search,SettingsOutlined } from '@mui/icons-material'
import {useDispatch} from "react-redux"
import FlexBetween from './FlexBetween'
import { setMode } from '../storage/globalSlices'
// import profileImage from "../assets/images.jpg"
import {AppBar,IconButton,InputBase,Toolbar,useTheme} from "@mui/material"
const Navbar:FC = () => {
  const dispatch = useDispatch();
  const theme:any = useTheme();
  return (
    <AppBar sx={{
            position:"fixed",
            background:"none",
            boxShadow:"none"
        }}
    >
        <Toolbar sx={{justifyContent:"space-between"}}>
            {/* LEFT SIDE */}
            <FlexBetween>
                <IconButton onClick={()=>console.log("open/close sidebar")}>
                    <MenuIcon/>
                </IconButton>
                <FlexBetween
                    //background={theme.palette.background.default}
                    borderRadius="9px"
                    gap="3rem"
                    p="0.1rem 1.5rem"
                >
                    <InputBase placeholder='Search ....' />
                    <IconButton>
                        <Search/>
                    </IconButton>
                </FlexBetween>
            </FlexBetween>
            {/* RIGHT SIDE */}
            <FlexBetween gap="1.4rem">
                <IconButton onClick={()=>dispatch(setMode())}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlined sx={{fontSize:"25px"}}/>
                    ):(
                        <LightModeOutlined sx={{fontSize:"25px"}}/>
                    )}
                </IconButton>
                <IconButton>
                    <SettingsOutlined sx={{fontSize:"25px"}}/>
                </IconButton>
            </FlexBetween>
        </Toolbar>

    </AppBar>
  )
}

export default Navbar