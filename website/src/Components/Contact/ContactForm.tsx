import React, { useState } from 'react';
import styled from 'styled-components';
import { ValidationError } from '@formspree/react';

interface IContactFormProps {
    state: any;
    handleSubmit: any;
}

interface IInput {
    name: string,
    email: string
}

const initData: IInput = {
    name: '',
    email: ''
}

export const ContactForm = ({state, handleSubmit}: IContactFormProps) => {

    const [ input, setInput ] = useState<IInput>(initData);

    const [ msgInp, setMsgInp ] = useState<string>('');

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
        const { name, value } = e.target;
        const payload = {
            ...input,
            [name]: value
        }
        setInput(payload);
    }

    const handleMessageChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e)=>{
        const value = e.target.value;
        setMsgInp(value);
    }

    if (state.succeeded) {
        return <p style={{fontSize: '25px'}}>Your message has been sent. Thank You for contacting.</p>;
    }
    
    return (
        <Container>

            <Form onSubmit={handleSubmit}>

                <Input type="text" name="name" id="name" placeholder="Name" onChange={handleChange} />

                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                /> 

                <Input type="text" name="email" id="email" placeholder="Email" onChange={handleChange} />

                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                /> 

                <Textarea name="message" id="message"  placeholder="Enter Message" onChange={handleMessageChange} ></Textarea>  

                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                /> 

                <Btn disabled={input.name.length === 0 ||
                                input.email.length === 0 || 
                                msgInp.length === 0}>
                    Submit
                </Btn>      

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
    resize: none;
`;

const Btn = styled.button`
    background: #58ba9d;
    height: 45px;
    width: 200px;
    border-radius: 5px;
    margin: 10px auto;
    cursor: pointer;
`;