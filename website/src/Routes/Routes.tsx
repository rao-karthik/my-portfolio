import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Home from '../Pages/Home';
import styled from 'styled-components';

export default function Routes () {
    return (
        <Container>
            <Navbar />
            <Switch>
                <Route>
                    <Home />
                </Route>
            </Switch>
        </Container>
    )
};

const Container = styled.div`
    position: relative;
`;
