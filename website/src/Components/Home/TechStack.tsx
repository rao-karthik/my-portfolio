import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'

export const TechStack = () => {

    const classes = useStyles();
    
    return (
        <Container>

            <Box className={classes.headingCont}>

                <Typography className={classes.head} variant='h3' >Tech Stack and Proficiencies</Typography>

            </Box>

        </Container>
    )
}

const Container = styled.div`

`;

const useStyles = makeStyles(theme=>({

    headingCont: {
        width: '70%',
        margin: 'auto',
        textAlign: 'center',
        padding: theme.spacing(10, 1),

        [theme.breakpoints.down(500)]: {
            width: '90%',
        }
    },

    head: {
        textAlign: 'center'
    }
}));
