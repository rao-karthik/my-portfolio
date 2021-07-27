import React, { useContext } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';

import { SingleProjectComp } from './SingleProjectComp';
import { IScrollContext, ScrollContext } from '../../Context/ScrollContextProvider';

import ProjectData from './ProjectData';

export const Projects = () => {

    const classes = useStyles();

    const { projectRef } = useContext<IScrollContext | any>(ScrollContext);

    return (
        <Container ref={projectRef}>
            
            <Box className={classes.headingCont}>

                <Typography variant='h3' className={classes.heading} >Projects</Typography>

            </Box>

            <Box className={classes.projects}>

                {
                    ProjectData.map(item=> <SingleProjectComp key={item.title} {...item} />)
                }
                
            </Box>
            
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    padding: 70px 0 0;
`;

const useStyles = makeStyles(theme=>({
    headingCont: {
        width: '70%',
        margin: 'auto',
        textAlign: 'center',
        padding: theme.spacing(4, 0, 2),

        [theme.breakpoints.down(500)]: {
            width: '100%',
            padding: theme.spacing(4, 0, 1)
        }
    },

    heading: {
        [theme.breakpoints.down(500)]: {
            fontSize: 50,
        }
    },

    projects: {
        width: '70%',
        margin: 'auto',
        paddingBottom: theme.spacing(3),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        borderBottom: '1px solid #424242',

        [theme.breakpoints.down(500)]: {
            width: '100%',
            paddingBottom: theme.spacing(5),
        },

        [theme.breakpoints.down(1025)]: {
            width: '80%'
        }
    }
}));