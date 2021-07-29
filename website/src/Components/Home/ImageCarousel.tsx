import React from 'react';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';

import { ImageCarousalItem } from './ImageCarouselItem';

export interface IImageCarouselProps {
    image: string
}

export const ImageCarousel = () => {
    var items: Array<IImageCarouselProps> = [
        {
            image: "https://kartik-yadav-portfolio.s3.ap-south-1.amazonaws.com/Project/ProjectCarousel/LinkedIn.png"
        },
        {
            image: "https://kartik-yadav-portfolio.s3.ap-south-1.amazonaws.com/Project/ProjectCarousel/Indeed.png"
        },
        // {
        //     image: "https://kartik-yadav-portfolio.s3.ap-south-1.amazonaws.com/Project/ProjectCarousel/railyatri.png"
        // },
        {
            image: "https://kartik-yadav-portfolio.s3.ap-south-1.amazonaws.com/Project/ProjectCarousel/Himalaya.png"
        },
        {
            image: "https://kartik-yadav-portfolio.s3.ap-south-1.amazonaws.com/Project/ProjectCarousel/Chargebee.png"
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

    @media (max-width: 1025px){
        height: 190px;
    }
`;