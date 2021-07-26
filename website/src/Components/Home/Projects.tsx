import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { SingleProjectComp } from './SingleProjectComp';
import JavascriptLogo from '../../Logos/JavascriptLogo';
import HtmlLogo from '../../Logos/HtmlLogo';
import ReactLogo from '../../Logos/ReactLogo';
import CssLogo from '../../Logos/CssLogo';
import ReduxLogo from '../../Logos/ReduxLogo';
import FirebaseLogo from '../../Logos/FirebaseLogo';
import MaterialUiLogo from '../../Logos/MaterialUiLogo';
import ExpressLogo from '../../Logos/ExpressLogo';
import MongoDbLogo from '../../Logos/MongoDbLogo';
import AwsLogo from '../../Logos/AwsLogo';

export interface IProjectList {
    title: string;
    imageTitle: string;
    imageUrl: string;
    description: string;
    githubLink: string;
    website: string;
    flexDirection?: string | any;
    techUsed: any[]
}

const projectList: IProjectList[] = [
    {
        title: 'LinkedIn Learning Clone',
        imageTitle: 'Linked Learning',
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Projects%2Fgif's%2FLinkedIn%20Learning.gif?alt=media&token=0259f0e6-98df-41a0-9101-7c383fa899c2",
        description: 'LinkedIn Learning is an e-Learning Platform. Here I have done the homePage, signIn and signUp functionality.',
        website: "https://linked-learning-project.web.app/",
        githubLink: 'https://github.com/ashish8796/linkedin-learning-clone',
        techUsed: [ <ReactLogo boxWidth='50px' boxHeight='50px' />, 
                    <ReduxLogo boxWidth='50px' boxHeight='50px' />,
                    <MaterialUiLogo boxWidth='50px' boxHeight='50px' />,
                    <ExpressLogo width='50px' height='50px' fontSize='7px' jsFontSize='9px' />,
                    <MongoDbLogo boxWidth='50px' boxHeight='50px' />,
                    <AwsLogo boxWidth='50px' boxHeight='50px' /> ]
    },
    {
        title: 'Indeed Clone',
        imageTitle: 'Indeed',
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Projects%2Fgif's%2FIndeed%20GIF.gif?alt=media&token=747f1411-38b1-4cbc-8427-ee81daa0b95d",
        description: 'Indeed is a job where users can search for jobs. Here I have done the homePage, signIn and signUp functionality.',
        githubLink: 'https://github.com/Rskamra002/Indeed-Clone',
        website: "https://teamberyllium-indeedclone.web.app/",
        flexDirection: 'row-reverse',
        techUsed: [ <ReactLogo boxWidth='50px' boxHeight='50px' />, 
                    <ReduxLogo boxWidth='50px' boxHeight='50px' />,
                    <FirebaseLogo boxWidth='50px' boxHeight='50px' />,
                    <MaterialUiLogo boxWidth='50px' boxHeight='50px' /> ]
    },
    {
        title: 'Himalaya Clone',
        imageTitle: 'Himalaya',
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Projects%2Fgif's%2FHimalaya.gif?alt=media&token=6590e19d-327e-497a-a617-92c373d3a19c",
        description: 'Himalaya is a herbal product e-commerce website. Here I have done the homePage, signIn and signUp functionality.',
        githubLink: 'https://github.com/rao-kartik/himalaya-clone',
        website: "https://rao-kartik.github.io/himalaya-clone/",
        techUsed: [ <JavascriptLogo width='50px' height='50px' variant='h5' />, 
                    <HtmlLogo boxWidth='50px' boxHeight='50px' svgWidth='80%' />,
                    <CssLogo boxWidth='50px' boxHeight='50px' svgWidth='80%' /> ]
    },
    {
        title: 'Chargebee Clone',
        imageTitle: 'Himalaya',
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Projects%2Fgif's%2FChargeebee.gif?alt=media&token=4716b057-0d7d-41f6-9c7f-8689500bf59a",
        description: 'Himalaya is a herbal product e-commerce website. Here I have done the homePage, signIn and signUp functionality.',
        githubLink: 'https://github.com/rao-kartik/himalaya-clone',
        website: "https://rao-kartik.github.io/chargeebee-clone/",
        flexDirection: 'row-reverse',
        techUsed: [ <JavascriptLogo width='50px' height='50px' variant='h5' />, 
                    <HtmlLogo boxWidth='50px' boxHeight='50px' svgWidth='80%' />, 
                    <CssLogo boxWidth='50px' boxHeight='50px' svgWidth='80%' /> ]
    },
]

export const Projects = () => {

    const classes = useStyles();

    return (
        <Container>
            
            <Box className={classes.headingCont}>

                <Typography variant='h3' className={classes.heading} >Projects</Typography>

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
        paddingBottom: theme.spacing(4),
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