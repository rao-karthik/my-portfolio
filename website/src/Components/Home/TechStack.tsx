import React from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';
import TypescriptLogo from '../../Logos/TypescriptLogo';
import JavascriptLogo from '../../Logos/JavascriptLogo';
import ReactLogo from '../../Logos/ReactLogo';
import HtmlLogo from '../../Logos/HtmlLogo';
import MaterialUiLogo from '../../Logos/MaterialUiLogo';
import BootstrapLogo from '../../Logos/BootstrapLogo';
import NodeJsLogo from '../../Logos/NodeJsLogo';
import MongoDbLogo from '../../Logos/MongoDbLogo';
import CssLogo from '../../Logos/CssLogo';
import ReduxLogo from '../../Logos/ReduxLogo';
import ExpressLogo from '../../Logos/ExpressLogo';
import FirebaseLogo from '../../Logos/FirebaseLogo';

export const TechStack = () => {

    const classes = useStyles();
    
    return (
        <Container>

            <Box className={classes.headingCont}>

                <Typography className={classes.head} variant='h3' >Tech Stack and Proficiencies</Typography>

            </Box>

            <Box className={classes.techs}>

                <Grid container spacing={3}>

                    <Grid item xs={6} sm={4} md={3} lg={3} xl={3} className={classes.gridItems}>

                        <Box className={classes.techIcons}>

                            <TypescriptLogo />

                            <Typography className={classes.iconName}>Typescript</Typography>

                        </Box>

                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={3} xl={3} className={classes.gridItems}>

                        <Box className={classes.techIcons}>

                            <JavascriptLogo />

                            <Typography className={classes.iconName}>Javascript</Typography>

                        </Box>

                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={3} xl={3} className={classes.gridItems}>

                        <Box className={classes.techIcons}>

                            <ReactLogo />

                            <Typography className={classes.iconName}>React</Typography>

                        </Box>

                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={3} xl={3} className={classes.gridItems}>

                        <Box className={classes.techIcons}>

                            <ReduxLogo />

                            <Typography className={classes.iconName}>Redux</Typography>

                        </Box>

                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={3} xl={3} className={classes.gridItems}>

                        <Box className={classes.techIcons}>
                                
                            <HtmlLogo />

                            <Typography className={classes.iconName}>HTML 5</Typography>

                        </Box>

                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={3} xl={3} className={classes.gridItems}>

                        <Box className={classes.techIcons}>
                            
                            <MaterialUiLogo />

                            <Typography className={classes.iconName}>Material UI</Typography>

                        </Box>

                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={3} xl={3} className={classes.gridItems}>

                        <Box className={classes.techIcons}>

                            <BootstrapLogo />

                            <Typography className={classes.iconName}>Bootstrap</Typography>

                        </Box>

                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={3} xl={3} className={classes.gridItems}>

                        <Box className={classes.techIcons}>

                            <CssLogo />

                            <Typography className={classes.iconName}>CSS</Typography>

                        </Box>

                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={3} xl={3} className={classes.gridItems}>

                        <Box className={classes.techIcons}>

                            <NodeJsLogo />

                            <Typography className={classes.iconName}>NodeJS</Typography>

                        </Box>

                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={3} xl={3} className={classes.gridItems}>

                        <Box className={classes.techIcons}>

                            <ExpressLogo />

                            <Typography className={classes.iconName}>Express</Typography>

                        </Box>

                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={3} xl={3} className={classes.gridItems}>

                        <Box className={classes.techIcons}>

                            <MongoDbLogo />

                            <Typography className={classes.iconName}>MongoDB</Typography>

                        </Box>

                    </Grid>

                    <Grid item xs={6} sm={4} md={3} lg={3} xl={3} className={classes.gridItems}>

                        <Box className={classes.techIcons}>

                            <FirebaseLogo />

                            <Typography className={classes.iconName}>Firebase</Typography>

                        </Box>

                    </Grid>

                </Grid>
            </Box>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`;

const useStyles = makeStyles(theme=>({

    headingCont: {
        width: '70%',
        margin: 'auto',
        textAlign: 'center',
        padding: theme.spacing(4, 0, 0),

        [theme.breakpoints.down(500)]: {
            width: '90%',
        }
    },

    head: {
        textAlign: 'center',
        padding: theme.spacing(2, 0, 2),

        [theme.breakpoints.down(500)]: {
            fontSize: 50
        }
    },

    techs: {
        width: '50%',
        margin: 'auto',
        display: 'flex',
        paddingBottom: theme.spacing(10),

        [theme.breakpoints.down(1300)]: {
            width: '55%'
        },

        [theme.breakpoints.down(1000)]: {
            width: '60%'
        },

        [theme.breakpoints.down(750)]: {
            width: '70%'
        }
    },

    gridItems: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
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

    svgIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        width: 80,
        height: 80,
        background: '#1abc9c',
    },
    
    svgLogo: {
        borderRadius: '50%',
    }
}));
