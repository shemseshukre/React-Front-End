import {
    Box, Card, CardContent,
    CardHeader, Typography,
    Button, CardActions, CardMedia
} from "@mui/material";
import React from 'react'
//import b4.jpg from 'images/b4.jpg'

export const Home = () => {
    return (
        <Box width='300px'>
            <Card>

                {/* <CardMedia
                component='img'
                height='120'
                image="images/b4.jpg"
                alt="Shemse"
                /> */}

                <CardContent>
                    <Typography  component="div">
                        React
                    </Typography>
                    <Typography  component="div">
                        React is a javaScript Library for buildin user interface.
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
       </Box>
    )
}
