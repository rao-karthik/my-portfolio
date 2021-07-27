import React from 'react';
import styled from 'styled-components';
import { Box, Divider, Drawer, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';
import CallIcon from '@material-ui/icons/Call';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import blackLogo from '../../Assets/blackLogo.png'

interface IHamburgerDrawerProps {
    open: boolean;
    handleDrawerClose: any;
}

export const HamburgerNavbar = ({open, handleDrawerClose}: IHamburgerDrawerProps) => {

    const classes = useStyles();

    return (
        <Container>

            <Drawer
                className={classes.drawer}
                variant="temporary"
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <CloseIcon className={`${classes.closeIcon} ${classes.drawerClose}`} 
                            onClick={handleDrawerClose} />

                <Box>
                    <Box className={classes.tagsBox}>

                        <Box className={classes.logoCont}>

                            <img className={classes.logo} src={blackLogo} alt="k" />

                        </Box>

                        <Divider />

                        <Link to='/' style={{textDecoration: 'none'}}>

                            <Box className={classes.tagCont} onClick={handleDrawerClose} >

                                <HomeIcon className={classes.tagIcon} />

                                <Typography className={classes.drawerTags}>Home</Typography>

                            </Box>

                        </Link>

                        <Divider />

                        <Link to='/about' style={{textDecoration: 'none'}}>

                            <Box className={classes.tagCont} onClick={handleDrawerClose} >

                                <PersonIcon className={classes.tagIcon} />
                                
                                <Typography className={classes.drawerTags}>About</Typography>

                            </Box>

                        </Link>

                        <Divider />

                        <Link to='/contact' style={{textDecoration: 'none'}}>

                            <Box className={classes.tagCont} onClick={handleDrawerClose} >

                                <CallIcon className={classes.tagIcon} />

                                <Typography className={classes.drawerTags}>Contact</Typography>

                            </Box>

                        </Link>

                        <Divider />

                        <Link to='/resume' style={{textDecoration: 'none'}}>

                            <Box className={classes.tagCont} onClick={handleDrawerClose} >

                                <AssignmentIcon className={classes.tagIcon} />

                                <Typography className={classes.drawerTags}>Resume</Typography>

                            </Box>

                        </Link>

                        <Divider />

                    </Box>

                    <Box className={classes.iconCont}>
                                
                        <Link to={{pathname: 'https://github.com/rao-kartik'}} 
                            target='_blank'
                            className={classes.iconLink} >
                        
                            <GitHubIcon className={classes.githubIcon} />

                        </Link>

                        <Link to={{pathname: 'https://www.linkedin.com/in/kartik-yadav-r/'}} 
                            target='_blank'
                            className={classes.iconLink} >
                        
                            <LinkedInIcon className={classes.linkedIcon} />

                        </Link>

                    </Box>

                </Box>
                
            </Drawer>

        </Container>
    )
};

const Container = styled.div`

`;

const drawerWidth = 260;
const logoDim = 100;

const useStyles = makeStyles(theme=>({
    logoCont: {
        width: logoDim,
        height: logoDim,
        margin: '0 auto 20px'
    },

    logo: {
        width: '100%',
        height: '!00%'
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        position: 'relative',
    },

    drawerPaper: {
        width: drawerWidth,
        padding: theme.spacing(1,0, 4),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    drawerIcon: {
        fontSize: '2rem',
    },

    drawerClose: {
        position: 'absolute',
        right: theme.spacing(2),
        top: theme.spacing(2),
        fontSize: '1.5rem'
    },

    closeIcon: {
        color: '#000',
        fontSize: '2rem',
        marginLeft: '10%',
        cursor: 'pointer'
    },

    tagsBox: {
        width: '100%',
        padding: theme.spacing(4, 0, 2, 0)
    },

    tagCont: {
        display: 'flex',
        paddingLeft: 20,
        margin: 15
    },

    drawerTags: {
        fontSize: 20,
        color: '#000'
    },

    tagIcon: {
        color: '#58ba9d',
        marginRight: theme.spacing(2),
        fontSize: 25,
        position: 'relative',
        top: '3px'
    },

    iconCont: {
        width: '100%',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconLink: {
        color: '#58ba9d',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
    },

    linkedIcon: {
        fontSize: 40,
        marginLeft: 20
    },

    githubIcon: {
        fontSize: 33,
    },
}));