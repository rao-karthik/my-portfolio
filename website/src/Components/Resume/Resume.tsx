import React from 'react';
import styled from 'styled-components';

export default function Resume () {
    return (
        <Container>
            <Embed src="https://kartik-yadav-portfolio.s3.ap-south-1.amazonaws.com/resume/KartikResume.pdf" type="application/pdf" />
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