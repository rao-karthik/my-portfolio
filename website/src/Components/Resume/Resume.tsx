import React from 'react';
import styled from 'styled-components';

export default function Resume () {
    
    return (
        <Container>
            <Embed src="https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Resume%2FKartik%20Resume.pdf?alt=media&token=4964b2ab-33fa-45ff-abd3-3609db0a7df6" type="application/pdf" />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    height: 100vh;
`;
    
const Embed = styled.embed`
    width: 100%;
    height: 100%;
    min-height: 810px;
`;