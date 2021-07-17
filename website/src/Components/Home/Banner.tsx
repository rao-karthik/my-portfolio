import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';

import pc from '../../logo/pc.webp';

export const Banner = () => {

    const classes = useStyles();

    return (
        <Container>
            <Box className={classes.headCont}>

                <Box className={classes.nameBox}>

                    <Typography className={classes.name}>Kartik Yadav</Typography>

                    <Typography className={classes.headText}>I am a full-stack web developer based in Gurugram</Typography>

                </Box>

                <Box className={classes.pcImageCont}>

                    <img className={classes.pcImage} src={pc} alt='' />

                </Box>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
`;

const useStyles = makeStyles(theme=>({

    headCont: {
        display: 'flex',
        width: '70%',
        alignItems: 'center',
        margin: 'auto',
        borderBottom: '1px solid #424242',
    },
    
    nameBox: {
        width: '100%',
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        [theme.breakpoints.down(500)]: {
            height: '200px',
            padding: theme.spacing(0, 1),
        },

        [theme.breakpoints.down(770)]: {
            height: '400px'
        },

        [theme.breakpoints.down(1025)]: {
            height: '500px'
        }
    },

    name: {
        fontSize: '70px',
        fontWeight: 600,

        [theme.breakpoints.down(500)]: {
            lineHeight: '72px',
            textAlign: 'center'
        },

        [theme.breakpoints.up(500)]: {
            marginTop: '-80px'
        },
    },

    headText: {
        color: '#a9a9a9',

        [theme.breakpoints.down(500)]: {
            textAlign: 'center'
        },
    },

    pcImageCont: {
        width: '600px',
        height: '400px',
        position: 'relative',

        [theme.breakpoints.down(500)]: {
            display: 'none'
        },
    },

    pcImage: {
        width: '100%',
        height: '100%'
    }
}));