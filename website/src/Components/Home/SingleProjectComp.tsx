import React from 'react';
import styled from 'styled-components';
import { Box, CardActionArea, CardActions, CardMedia, makeStyles, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import { v4 as uuid} from 'uuid';

import { IProjectList } from './Projects';
import { Link } from 'react-router-dom';

export const SingleProjectComp = ({title, imageTitle, imageUrl, description, website, githubLink, flexDirection, techUsed}: IProjectList,) => {

    const classes = useStyles();
    
    return (
        <Container>

            <Box className={classes.root} style={{flexDirection: flexDirection}}>

                <CardActionArea className={classes.mediaBox}>

                    <CardMedia
                        className={classes.media}
                        image={imageUrl}
                        title= {imageTitle}
                    />

                </CardActionArea>

                <CardActions className={classes.githubCont}>

                    <Box>

                        <Typography gutterBottom variant="h4" component="h2" className={classes.head}>

                            {title}

                        </Typography>

                        <Typography variant="body1" color="textSecondary" component="p" className={classes.description}>

                            {description}

                        </Typography>

                    </Box>

                    <Box className={classes.gitSite}>

                        <Link to={{pathname: website}}
                            target= '_blank'
                            className={classes.github}>

                            <LanguageIcon className={classes.gitSiteLogo} />

                            <Typography className={classes.githubText}>Website</Typography>

                        </Link>

                        <Link to={{pathname: githubLink}}
                            target= '_blank'
                            className={classes.github}>

                            <GitHubIcon className={classes.gitSiteLogo} />

                            <Typography className={classes.githubText}>Github</Typography>

                        </Link>

                    </Box>

                    <Box className={classes.techUsed}>
                        
                        {
                            techUsed.map(item => 
                                <Box key={uuid()} className={classes.techLogo}>
                                    {item}
                                </Box>
                            )
                        }

                    </Box>

                </CardActions>

            </Box>

        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100%;
    margin: 10px 0 50px;

    @media (max-width: 500px) {
        margin: 30px 0 30px;
    }
`;
const useStyles = makeStyles(theme=>({
    root: {
        width: '100%',
        display: 'flex',
        padding: 20,
        background: 'none',
        justifyContent: 'space-between',
        alignItems: 'center',

        [theme.breakpoints.down(1390)]: {
            flexDirection: 'column !important'         
        },

        [theme.breakpoints.down(500)]:{
            padding: 0,
            width: '100%',
            margin: 0
        }
    },

    mediaBox: {
        width: '60%',
        padding: 15,
        border: '2px solid #fff',
        borderRadius: 25,
        height: 400,

        [theme.breakpoints.down(1390)]: {
            width: '100%',
            height: 450
        },

        [theme.breakpoints.down(500)]: {
            width: '100%',
            height: 300,
            padding: 5,
            border: '1px solid #fff',
            borderRadius: 20
        },
    },

    media: {
        height: '100%',
        cursor: 'default',
        width: '100%',
        boxShadow: '0 0 5px 3px #424242',
        borderRadius: 15
    },

    head: {
        color: '#58ba9d',
        textAlign: 'center',

        [theme.breakpoints.down(500)]: {
            marginTop: 20
        }
    },

    description: {
        color: '#fff',
        textAlign: 'center'
    },

    githubCont: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '38%',

        [theme.breakpoints.down(1390)]: {
            width: '100%'
        },
    },

    gitSite: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: theme.spacing(0, 6),
        
        [theme.breakpoints.down(1530)]: {
            padding: theme.spacing(0, 3),            
        },

        [theme.breakpoints.down(1390)]: {
            justifyContent: 'center'            
        }
    },

    github: {
        color: '#58ba9d',
        display: 'flex',
        cursor: 'pointer',
        textDecoration: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '15px 20px 15px 0',
    },

    gitSiteLogo: {
        fontSize: 25
    },

    githubText: {
        marginLeft: 10,
        fontSize: 20
    },

    techIcons: {
        width: 100,
        height: 110,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    iconName: {
        color: '#bdbdbd',
        textAlign: 'center',
        fontSize: 13,
    },

    techUsed: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',

        [theme.breakpoints.down(500)]: {
            width: '100%'
        }
    },

    techLogo: {
        margin: 10
    }
  }));