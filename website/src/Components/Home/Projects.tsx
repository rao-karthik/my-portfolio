import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { SingleProjectComp } from './SingleProjectComp';

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
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21f22.appspot.com/o/Projects%2FLinkedIn.png?alt=media&token=1d37dac1-5bfd-4ba2-b11f-ba3aa4ecb173",
        description: 'LinkedIn Learning is an e-Learning Platform. Here I have done the homePage, signIn and signUp functionality.',
        githubLink: 'https://github.com/ashish8796/linkedin-learning-clone'
    },
    {
        title: 'Indeed Clone',
        imageTitle: 'Indeed',
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21f22.appspot.com/o/Projects%2FIndeed.png?alt=media&token=d279368e-fdb7-4b05-baa0-e1b86b11f32b",
        description: 'Indeed is a job where users can search for jobs. Here I have done the homePage, signIn and signUp functionality.',
        githubLink: 'https://github.com/Rskamra002/Indeed-Clone'
    },
    {
        title: 'Himalaya Clone',
        imageTitle: 'Himalaya',
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21f22.appspot.com/o/Projects%2FHimalaya.png?alt=media&token=297b260e-d943-43ab-93d8-89b73f9b8921",
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
        padding: theme.spacing(10),

        [theme.breakpoints.down(500)]: {
            width: '90%',
            padding: theme.spacing(10, 0, 7)
        }
    },

    projects: {
        width: '70%',
        margin: 'auto',
        paddingBottom: theme.spacing(10),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        borderBottom: '1px solid #424242',

        [theme.breakpoints.down(500)]: {
            width: '90%'
        }
    }
}));