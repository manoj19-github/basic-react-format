/* eslint-disable react/react-in-jsx-scope */
import {FC, useState} from 'react'
import {Box,useMediaQuery} from "@mui/material"
import { Outlet } from 'react-router-dom'
// import { useSelector } from 'react-redux';
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
// interface LayoutProps{

// }
const Layout:FC = ():JSX.Element => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [isSidebarOpen,setIsSidebarOpen] = useState<boolean>(true)
  return (
    <Box display={isNonMobile ? "flex":"block"} width="100%" height="100%" sx={{}}>
        <Sidebar 
            isNonMobile={isNonMobile}  
             drawerWidth="250px"
             isSidebarOpen={isSidebarOpen}
             setIsSidebarOpen={setIsSidebarOpen}
        />
        <Box >
            <Navbar 
                // isSidebarOpen={isSidebarOpen}
                // setIsSidebarOpen={setIsSidebarOpen}
             />
            <Outlet/>

        </Box>
    </Box>
  )
}

export default Layout