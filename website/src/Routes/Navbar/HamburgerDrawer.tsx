import React from 'react';
import { Drawer, makeStyles } from '@material-ui/core';
import styled from 'styled-components';

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
                
            </Drawer>
        </Container>
    )
};

const Container = styled.div`

`;

const drawerWidth = 260;

const useStyles = makeStyles(theme=>({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        position: 'relative',
    },
    drawerPaper: {
        width: drawerWidth,
        padding: theme.spacing(7,0, 4),
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
}));