import React from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import { Box } from '@mui/material'
import Typography from '@mui/material'
import ProductList from './Products/ProductList'

export default function Products() {
    return (
        <>
            <div className='bgcolor'>
                <NavBar />
                <Box height={80} />
                <Box sx={{ display: "flex" }}>
                    <SideBar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <ProductList />
                    </Box>
                </Box>
            </div>
        </>
    )
}
