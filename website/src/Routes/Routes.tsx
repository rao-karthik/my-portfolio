import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Navbar from './Navbar/Navbar';
import Home from '../Pages/Home';
import styled from 'styled-components';
import Footer from './Footer/Footer';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Resume from '../Pages/Resume';
import ScrollToTop from './ScrollToTop';

export default function Routes () {

    const history = createBrowserHistory();

    return (
        <Container>
            <Router history={history}>

                <ScrollToTop />
                
                <Navbar />

                <Switch>
                    
                    <Route path='/' exact>

                        <Home />

                    </Route>

                    <Route path='/about' exact>

                        <About />

                    </Route>

                    <Route path='/contact' exact>

                        <Contact />

                    </Route>

                    <Route path='/resume' exact>

                        <Resume />

                    </Route>

                </Switch>

                <Footer />

            </Router>

        </Container>
    )
};

const Container = styled.div`
    position: relative;
`;
