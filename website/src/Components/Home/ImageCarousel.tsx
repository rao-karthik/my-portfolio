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
            image: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21f22.appspot.com/o/Projects%2FLinkedIn.png?alt=media&token=1d37dac1-5bfd-4ba2-b11f-ba3aa4ecb173"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21f22.appspot.com/o/Projects%2FIndeed.png?alt=media&token=d279368e-fdb7-4b05-baa0-e1b86b11f32b"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-21f22.appspot.com/o/Projects%2FHimalaya.png?alt=media&token=297b260e-d943-43ab-93d8-89b73f9b8921"
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