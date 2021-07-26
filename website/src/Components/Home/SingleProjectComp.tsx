import React from 'react';
import styled from 'styled-components';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

import { IProjectList } from './Projects';
import { Link } from 'react-router-dom';

export const SingleProjectComp = ({title, imageTitle, imageUrl, description, website, githubLink, flexDirection}: IProjectList,) => {

    const classes = useStyles();
    
    return (
        <Container>

            <Card className={classes.root} style={{flexDirection: flexDirection}}>

                <CardActionArea className={classes.mediaBox}>

                    <CardMedia
                        className={classes.media}
                        image={imageUrl}
                        title= {imageTitle}
                    />

                </CardActionArea>

                <CardActions className={classes.githubCont}>

                    <CardContent>

                        <Typography gutterBottom variant="h4" component="h2" className={classes.head}>

                            {title}

                        </Typography>

                        <Typography variant="body1" color="textSecondary" component="p" className={classes.description}>

                            {description}

                        </Typography>

                    </CardContent>

                    <Box className={classes.gitSite}>
                        <Link to={{pathname: website}}
                            target= '_blank'
                            className={classes.github}>

                            <LanguageIcon className={classes.head} />

                            <Typography className={classes.githubText}>Website</Typography>

                        </Link>

                        <Link to={{pathname: githubLink}}
                            target= '_blank'
                            className={classes.github}>

                            <GitHubIcon className={classes.head} />

                            <Typography className={classes.githubText}>Github</Typography>

                        </Link>

                    </Box>

                </CardActions>

            </Card>

        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100%;
    margin: 50px 0;
`;

const useStyles = makeStyles(theme=>({
    root: {
      width: '100%',
      display: 'flex',
      padding: 20,
      background: 'none',
    justifyContent: 'space-between',

      [theme.breakpoints.down(500)]:{
          width: 300
      }
    },

    mediaBox: {
        width: '64%',
        padding: 15,
        border: '1px solid #fff',
        borderRadius: 5
    },

    media: {
      height: 400,
      cursor: 'default',
      width: '100%',
      boxShadow: '0 0 5px 3px #424242',
      borderRadius: 5
    },

    head: {
        color: '#58ba9d'
    },

    description: {
        color: '#fff'
    },

    githubCont: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        width: '33%'
    },

    gitSite: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: theme.spacing(0, 6),
    },

    github: {
        color: '#58ba9d',
        display: 'flex',
        cursor: 'pointer',
        textDecoration: 'none'
    },

    githubText: {
        marginLeft: 10
    }
  }));