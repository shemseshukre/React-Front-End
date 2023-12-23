import { React, useState } from 'react'
import { AppBar, Toolbar, Box, IconButton, Typography, Stack, Drawer, Button, Menu, MenuItem } from '@mui/material'
export const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton siz='small' edge='start' color='inherent' aria-label='logo'>
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Admin
                </Typography>
                <Stack direction='column' spacing={2}>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
export default Header;

