import React from 'react';
import styled from 'styled-components';

export default function Resume () {
    return (
        <Container>
            <Embed src="https://firebasestorage.googleapis.com/v0/b/rao-kartik.appspot.com/o/Resume%2FKartik%20Resume.pdf?alt=media&token=77056736-072d-410b-9be4-1416cc56add0" type="application/pdf" />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 800px;
`;
    
const Embed = styled.embed`
    width: 100%;
    height: 100%;
    min-height: 810px;
`;