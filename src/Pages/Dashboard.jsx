import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Box from '@mui/material/Box';


export const Dashboard = () => {
  return (
    <>
    <NavBar/>
     <Box height={30}/>
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <h1>Dashboard</h1>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        </Box>
        
      </Box>
    </>
  );
}

export default Dashboard;