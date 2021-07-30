import React from 'react';
import styled from 'styled-components';

export default function Resume () {
    return (
        <Container>
            <Embed src="https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Resume%2FKartik%20Resume.pdf?alt=media&token=89d8722c-0b24-441a-a0bb-31fefd6400c0" type="application/pdf" />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    height: 93vh;
`;
    
const Embed = styled.embed`
    width: 100%;
    height: 100%;
    min-height: 810px;
`;