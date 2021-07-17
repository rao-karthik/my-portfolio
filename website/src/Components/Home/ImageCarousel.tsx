import React from 'react';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';

import { ImageCarousalItem } from './ImageCarouselItem';
import linkedIn from '../../logo/LinkedIn.png';
import indeed from '../../logo/Indeed.png';
import himalaya from '../../logo/Himalaya.png';

export interface IImageCarouselProps {
    image: string
}

export const ImageCarousel = () => {
    var items: Array<IImageCarouselProps> = [
        {
            image: linkedIn
        },
        {
            image: indeed
        },
        {
            image: himalaya
        }
    ]

    return (
        <Container>

            <Carousel
                next={(prev: any)=> prev+1}
                prev={(prev: any)=> prev-1}
                indicatorContainerProps={{
                    style: {
                        position: 'absolute',
                        bottom: '20px'
                    }
                }}
            >

                {
                    items.map( (item, i) => <ImageCarousalItem key={i} item={item} /> )
                }

            </Carousel>

        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    height: 250px;
`;