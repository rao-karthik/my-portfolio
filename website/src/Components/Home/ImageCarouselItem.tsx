import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { IImageCarouselProps } from './ImageCarousel';

import styled from 'styled-components';

interface IImageCarosalItemProps {
    item: IImageCarouselProps;
};

export const ImageCarousalItem = ({item}: IImageCarosalItemProps) => {

    const classes = useStyles();
    
    return (
        <Container>

            <Paper className={classes.imagePaper}>

                <img className={classes.image} src={item.image} alt="" />

            </Paper>

        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const useStyles = makeStyles(theme=>({
    imagePaper: {
        width: '100%',
        height: '250px',


        [theme.breakpoints.down(1025)]: {
            height: '190px',
        },
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: '3px',
    }
}));