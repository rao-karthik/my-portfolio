import React from 'react';
import { AppBar, Box, makeStyles, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import styled from 'styled-components';
import clsx from 'clsx';
import { HamburgerNavbar } from './HamburgerDrawer';

import whiteLogo from '../../logo/whiteLogo.png';

export default function Navbar () {

    const classes = useStyles();
    
    const [ open, setOpen ] = React.useState(false);

    const handleDrawerOpen: React.MouseEventHandler<SVGSVGElement> = () => {
        setOpen(true);
    };

    const handleDrawerClose: React.MouseEventHandler<SVGSVGElement> = () => {
        setOpen(false)
    }

    return (
        <Container>
            <HamburgerNavbar open={open} handleDrawerClose={handleDrawerClose} />
            
            <AppBar position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}>
                        
                    <MenuIcon className={classes.menuIcon} 
                                    onClick={handleDrawerOpen} />

                    <Box className={classes.mainCont}>
                            

                            <Box className={classes.imageBox}>
                                
                                <img className={classes.image} src={whiteLogo} alt='Kartik' />

                            </Box>

                            <Box className={classes.tagCont}>

                                <Typography className={classes.tags}>Home</Typography>
                                
                            </Box>

                            <Box className={classes.tagCont}>

                                <Typography className={classes.tags}>About</Typography>
                                
                            </Box>

                            <Box className={classes.tagCont}>

                                <Typography className={classes.tags}>Contact me</Typography>
                                
                            </Box>

                    </Box>
            </AppBar>
            
        </Container>
    )
};

const Container = styled.div`
    position: relative;
`;

const drawerWidth = 260;

const useStyles = makeStyles(theme=>({
    appBar: {
        background: '#000',
        height: '80px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuIcon: {
        cursor: 'pointer',
        fontSize: '36px',
        marginLeft: '30px',

        [theme.breakpoints.up(960)]: {
            display: 'none'
        },
    },
    mainCont: {
        minWidth: '900px',
        width: '70%',
        height: '100%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',

        [theme.breakpoints.down(960)]: {
            display: 'none'
        }
    },
    imageBox: {
        width: '50px'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    tagCont: {
        height: '100%',
        marginLeft: '30px',
    },
    tags: {
        fontSize: '20px',
        position: 'absolute'
    }
}));