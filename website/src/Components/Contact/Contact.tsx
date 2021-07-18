import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import styled from 'styled-components'
import { ContactForm } from './ContactForm';

export default function Contact () {

    const classes = useStyles();
    
    return (
        <Container>

            <Box className={classes.mainCont}>

                <Box className={classes.leftCont}>

                </Box>
    
                <Box className={classes.rightCont}>
                    
                    <ContactForm />
                    
                </Box>

            </Box>

        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    min-height: 100%;
    background: #222222;
    position: relative;
    color: #fff;
`;

const useStyles = makeStyles(theme=>({
    mainCont: {
        width: '70%',
        height: '800px',
        margin: 'auto',
        display: 'flex',
        padding: theme.spacing(5, 0)

    },
    leftCont: {
        width: '50%',
        height: '100%',
        borderRight: '1px solid #424242',
        paddingRight: theme.spacing(5)
    },
    
    rightCont: {
        width: '50%',
        paddingLeft: theme.spacing(5)
    }
}));