import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export const ContactForm = () => {

    const classes = useStyles();


const inputProps = {
    className: classes.inputs
}
    
    return (
        <Container>
            <form noValidate autoComplete="off">

                <TextField id="standard-basic" 
                            label="Name"
                            InputProps={inputProps}
                            InputLabelProps={inputProps}
                            color= 'primary' />

            </form>
        </Container>
    )
}

const Container = styled.div`
    
`;

const useStyles = makeStyles(theme=>({
    inputs: {
        borderColor: '#fff !important',
        color: '#fff !important'
    }
}));