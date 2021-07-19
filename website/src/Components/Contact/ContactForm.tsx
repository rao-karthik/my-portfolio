import React from 'react';
import styled from 'styled-components';

export const ContactForm = () => {
    
    return (
        <Container>

            <Heading>or</Heading>

            <Form noValidate autoComplete="off">

                <Input type="text" placeholder="Name" />  

                <Input type="text" placeholder="Email" />

                <Textarea name="" id=""  placeholder="Enter Message"></Textarea>     

                <Btn>Submit</Btn>      

            </Form>

        </Container>
    )
}

const Container = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Heading = styled.p`
    margin-bottom: 10px;
    font-size: 30px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 410px;

    @media (max-width: 500px) {
        width: 350px;
    };

    @media (max-width: 350px) {
        width: 270px;
    }
`;

const Input = styled.input`
    margin: 10px 0;
    height: 45px;
    border-radius: 5px;
    padding: 0 20px;
    font-size: 16px;
`;

const Textarea = styled.textarea`
    margin: 10px 0;
    height: 200px;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
`;

const Btn = styled.button`
    background: #58ba9d;
    height: 45px;
    width: 200px;
    border-radius: 5px;
    margin: 10px auto;
`;