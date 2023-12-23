// import { React, useState } from 'react'
// import {
//     Drawer, Box, Typography,
//     IconButton, SpeedDialIcon, List,
//     ListItem, ListItemText,
//     ListItemIcon, ListItemAvatar,
//     Avatar, ListItemButton,
//     Divider
// } from '@mui/material'

// export const Sidebar = () => {
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false)
//     return (
//         <>
//             <IconButton
//                 size='large'
//                 color='inherent'
//                 aria-label='logo'
//                 onClick={() => setIsDrawerOpen(true)}
//             >
//                 <SpeedDialIcon />
//             </IconButton>
//             <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
//                 <Box p={2} width='250px' textAlign='center' role='presentation'>
//                     <Typography variant='h6' component='div'color='secondary'>
//                         Side Panel
//                         <Box sx={{ width: '400px', bgcolor: 'efefef' }} color='secondary'>
//                             <List>
//                                 <ListItem disablePadding>
//                                     <ListItemButton >
//                                         <ListItemIcon >
//                                             <ListItemAvatar>
//                                                 <Avatar>
//                                                     <SpeedDialIcon/>
//                                                 </Avatar>
//                                             </ListItemAvatar>
//                                         </ListItemIcon>
//                                         <ListItemText primary='List Item 1' secondary='List Item 1' />
//                                     </ListItemButton>
//                                 </ListItem>
//                                 <Divider />
//                                 <ListItem disablePadding>
//                                     <ListItemButton>
//                                         <ListItemIcon>
//                                             <ListItemAvatar>
//                                                 <Avatar>
//                                                     <SpeedDialIcon />
//                                                 </Avatar>
//                                             </ListItemAvatar>
//                                         </ListItemIcon>
//                                         <ListItemText primary='List Item 2' secondary='List Item 2' />
//                                     </ListItemButton>
//                                 </ListItem>
//                                 <Divider />
//                                 <ListItem disablePadding>
//                                     <ListItemButton>
//                                         <ListItemIcon>
//                                             <ListItemAvatar>
//                                                 <Avatar>
//                                                     <SpeedDialIcon />
//                                                 </Avatar>
//                                             </ListItemAvatar>
//                                         </ListItemIcon>
//                                         <ListItemText primary='List Item 3' secondary='List Item 3' />
//                                     </ListItemButton>
//                                 </ListItem>
//                             </List>
//                         </Box>
//                     </Typography>
//                 </Box>
//             </Drawer>
//         </>
//     )
// }

// export default Sidebar;

import React from 'react'
import axios from 'axios';


const Sidebar = () => {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar