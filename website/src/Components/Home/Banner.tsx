import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';

import { ImageCarousel } from './ImageCarousel';
import pcImage from '../../Assets/pc.webp';

export const Banner = () => {

    const classes = useStyles();

    return (
        <Container>
            
            <Box className={classes.headCont}>

                <Box className={classes.nameBox}>

                    <img src='' alt='' />

                    <Typography className={classes.name}>Kartik Yadav</Typography>

                    <Typography className={classes.headText}>I am a full-stack web developer based in Gurugram</Typography>

                </Box>

                <Box className={classes.pcImageCont}>

                    <img className={classes.pcImage} src={pcImage} alt='' />

                    <Box className={classes.carouselBox}>

                        <ImageCarousel />
                        
                    </Box>

                </Box>

            </Box>

        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    height: 100vh;
`;

const useStyles = makeStyles(theme=>({

    headCont: {
        display: 'flex',
        width: '70%',
        height: '100%',
        alignItems: 'center',
        margin: 'auto',
        borderBottom: '1px solid #424242',

        [theme.breakpoints.down(500)]: {
            width: '90%'
        }
    },
    
    nameBox: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        
        [theme.breakpoints.down(1030)]: {
            height: '500px',
            paddingRight: '30px'
        },
        
        [theme.breakpoints.down(770)]: {
            height: '400px'
        },

        [theme.breakpoints.down(500)]: {
            height: '560px',
            padding: theme.spacing(0, 1, 1),
        },

        [theme.breakpoints.down(500)]: {
            height: '560px',
            padding: theme.spacing(0, 1, 1),
        },

        [theme.breakpoints.down(400)]: {
            height: '560px',
            padding: theme.spacing(0, 1),
        },

        [theme.breakpoints.down(350)]: {
            height: '500px',
            padding: theme.spacing(0, 1),
        },
    },

    name: {
        color: '#58ba9d',
        fontSize: 90,
        fontWeight: 600,

        [theme.breakpoints.down(1140)]: {
            lineHeight: '72px',
            fontSize: 80,
            marginBottom: 20
        },

        [theme.breakpoints.down(550)]: {
            lineHeight: '72px',
            textAlign: 'center',
            fontSize: 65,
        },

        [theme.breakpoints.up(550)]: {
            marginTop: '-80px'
        },

        [theme.breakpoints.down(400)]: {
            lineHeight: '70px',
            textAlign: 'center',
            fontSize: 70,
            marginBottom: 0
        },

        [theme.breakpoints.down(350)]: {
            lineHeight: '50px',
            textAlign: 'center',
            fontSize: 50,
            marginBottom: 0
        },

    },

    headText: {
        color: '#a9a9a9',
        fontSize: 20,

        [theme.breakpoints.down(550)]: {
            textAlign: 'center',
            marginTop: 30
        },

        [theme.breakpoints.down(400)]: {
            textAlign: 'center',
            marginTop: 20
        },
    },

    pcImageCont: {
        minWidth: '400px',
        width: '600px',
        height: '400px',
        position: 'relative',

        [theme.breakpoints.down(770)]: {
            display: 'none'
        },

        [theme.breakpoints.down(1025)]: {
            height: '300px',
            width: '300px',
            minWidth: 300
        },
    },

    pcImage: {
        width: '100%',
        height: '100%',
    },

    carouselBox: {
        position: 'absolute',
        // minWidth: '335px',
        width: '357px',
        height: '300px',
        top: '24px',
        right: '22px',

        [theme.breakpoints.down(1025)]: {
            width: 268,
            minWidth: 200,
            height: 190,
            right: 16,
            top: 16,
        },
    }
}));