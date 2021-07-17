import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { SingleProjectComp } from './SingleProjectComp';

import linkedIn from '../../logo/LinkedIn.png';
import indeed from '../../logo/Indeed.png';
import himalaya from '../../logo/Himalaya.png';

export interface IProjectList {
    title: string;
    imageTitle: string;
    imageUrl: string;
    description: string;
    githubLink: string;
}

const projectList: IProjectList[] = [
    {
        title: 'Linked Learning Clone',
        imageTitle: 'Linked Learning',
        imageUrl: linkedIn,
        description: 'LinkedIn Learning is an e-Learning Platform. Here I have done the homePage, signIn and signUp functionality.',
        githubLink: 'https://github.com/ashish8796/linkedin-learning-clone'
    },
    {
        title: 'Indeed Clone',
        imageTitle: 'Indeed',
        imageUrl: indeed,
        description: 'Indeed is a job where users can search for jobs. Here I have done the homePage, signIn and signUp functionality.',
        githubLink: 'https://github.com/Rskamra002/Indeed-Clone'
    },
    {
        title: 'Himalaya Clone',
        imageTitle: 'Himalaya',
        imageUrl: himalaya,
        description: 'Himalaya is a herbal product e-commerce website. Here I have done the homePage, signIn and signUp functionality.',
        githubLink: 'https://github.com/rao-kartik/himalaya-clone'
    },
]

export const Projects = () => {

    const classes = useStyles();

    return (
        <Container>
            
            <Box className={classes.headingCont}>

                <Typography variant='h3' >Projects</Typography>

            </Box>

            <Box className={classes.projects}>

                {
                    projectList.map(item=> <SingleProjectComp {...item} />)
                }
                
            </Box>
            
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const useStyles = makeStyles(theme=>({
    headingCont: {
        width: '70%',
        margin: 'auto',
        textAlign: 'center',
        padding: theme.spacing(10)
    },

    projects: {
        width: '70%',
        margin: 'auto',
        paddingBottom: theme.spacing(10),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        borderBottom: '2px solid #424242'
    }
}));