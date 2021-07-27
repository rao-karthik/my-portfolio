import React from 'react';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';

import { ImageCarousalItem } from './ImageCarouselItem';

import linkedInLearning from '../../Assets/ProjectCarousel/LinkedIn.png';
import himalaya from '../../Assets/ProjectCarousel/Himalaya.png';
import indeed from '../../Assets/ProjectCarousel/Indeed.png';
import chargeBee from '../../Assets/ProjectCarousel/Chargebee.png';
// import railYatri from '../../Assets/ProjectCarousel/railYatri.png';

export interface IImageCarouselProps {
    image: string
}

export const ImageCarousel = () => {
    var items: Array<IImageCarouselProps> = [
        {
            image: linkedInLearning
        },
        {
            image: indeed
        },
        // {
        //     image: railYatri
        // },
        {
            image: himalaya
        },
        {
            image: chargeBee
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