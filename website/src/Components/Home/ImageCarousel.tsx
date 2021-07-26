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
            image: "https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Projects%2FLinkedIn.png?alt=media&token=41b96f1c-82af-42a4-b198-468ef06e4113"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Projects%2FIndeed.png?alt=media&token=c67e42e7-6426-4dad-a843-0d1d3e9e1af8"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Projects%2Frailyatri.png?alt=media&token=87fad87d-05d7-4141-9f84-2351c0afbd33"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Projects%2FHimalaya.png?alt=media&token=e7ff9b20-6736-4498-94c3-66a755f9d5b2"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Projects%2FChargebee.png?alt=media&token=2a060ee6-bb86-4ea0-a08f-6d806a81f3a4"
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