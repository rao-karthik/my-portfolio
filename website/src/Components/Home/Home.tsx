import React from 'react';
import styled from 'styled-components';

import { Banner } from './Banner';

export default function Home () {

    return (
        <Container>

            <Banner />

        </Container>
    )
};

const Container = styled.div`
    position: relative;
    background: #222222;
    width: 100%;
    color: #fff;
`;