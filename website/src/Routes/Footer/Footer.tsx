import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components'

export default function Footer () {

    const classes = useStyles();

    return (
        <Container>

            <Box className={classes.footerContainer}>

                <Typography className={classes.copyRighttext}>

                    Copyright © 2021 Kartik Yadav - All Rights Reserved.

                </Typography>

            </Box>

        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 70px;
    background: #000;
`;

const useStyles = makeStyles(theme=>({

    footerContainer: {
        width: '70%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '1px solid #424242',
        margin: 'auto',

        [theme.breakpoints.down(500)]: {
            width: '90%'
        }
    },

    copyRighttext: {
        color: '#fff',
        fontWeight: 400,

        [theme.breakpoints.down(500)]: {
            textAlign: 'center',
            paddingTop: 10
        }
    }
}));
