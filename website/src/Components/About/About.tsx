import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';

import profilePic from '../../Assets/profilePic.jpg';

export default function About () {

    const classes = useStyles();
    
    return (
        <Container>
            
            <Box className={classes.mainCont}>

                <Typography variant='h3' className={classes.about}>WHO IS<span className={classes.me}> THIS</span> MAN?</Typography>

                <Box className={classes.quoteBox}>

                    <Typography className={classes.quote}>"A DESIGNER IS A PLANNER WITH AN AESTHETIC SENSE." - BRUNO MUNARI</Typography>

                </Box>

                <Box className={classes.contentBox}>

                    <Box className={classes.imageBox}>

                        <img className={classes.image} src={profilePic} alt='' />

                    </Box>

                    <Box className={classes.description}>

                        <Typography variant='h4' className={classes.iam}>
                            
                            I am

                            <span className={classes.i}> A FULL STACK WEB-DEVELOPER</span>
                            
                        </Typography>

                        <Typography className={classes.content}>

                            I have passion of creating good apps for good people.

                        </Typography>

                        <Typography className={classes.content}>

                            One of my hobby is to explore new techs.

                        </Typography>

                        <Typography className={classes.content}>

                            I am always eager to engage in new and exciting projects and if you want to build something together, get in touch.

                        </Typography>

                    </Box>

                </Box>

            </Box>

        </Container>
    )
}

const Container = styled.div`,
    width: 100%;
    height: 100%;
    height: 93vh;
    background: #000;
    padding: 60px 0 0;

    @media (max-width: 800px) {
        height: auto;
    }
`;

const useStyles = makeStyles(theme=>({
    mainCont: {
        width: '70%',
        margin: 'auto',
        paddingTop: 40,

        [theme.breakpoints.down(500)]: {
            width: '90%'
        }
    },

    about: {
        color: '#fff',
        marginBottom: 20,

        [theme.breakpoints.down(500)]: {
            textAlign: 'center'
        }
    },

    me: {
        color: '#58ba9d'
    },

    quoteBox: {
        borderTop: '1px solid #424242',
        borderBottom: '1px solid #424242',
        padding: 17,
    },

    quote: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22
    },

    description: {
        [theme.breakpoints.down(800)]: {
            marginTop: 60
        }
    },

    contentBox: {
        display: 'flex',
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: theme.spacing(0, 10),

        [theme.breakpoints.down(800)]: {
            flexDirection: 'column',
            height: 'auto',
            marginTop: 30
        }
    },

    imageBox: {
        height: 270,
        width: 270,
        borderRadius: '50%',
        marginRight: 20,
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
    },

    iam: {
        color: '#fff',
        paddingLeft: 20,
        lineHeight: 2,

        [theme.breakpoints.down(500)]: {
            fontSize: 30,
            lineHeight: 1,
            marginBottom: 20
        },

        [theme.breakpoints.down(800)]: {
            fontSize: 40
        },

        [theme.breakpoints.between(800, 1070)]: {
            fontSize: 50
        }
    },

    i: {
        color: '#58ba9d',
        fontWeight: 600
    },

    content: {
        color: '#fff',
        textAlign: 'left',
        fontSize: 20,
        width: 500,
        paddingLeft: 20,
        lineHeight: 1.5,
        marginBottom: 10,

        [theme.breakpoints.down(550)]: {
            width: 300,
        },

        [theme.breakpoints.between(800, 1070)]: {
            width: 250
        }
    }
}));