import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import {  toast, Toaster } from 'sonner';
import { colorsui } from '../../ui/colors';
import {  Button, TextField } from '@mui/material';
import { useState } from 'react';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${colorsui.backGroundGray};
    max-width: 1200px;
    margin: 0 auto;
    padding:  4rem 0;
    border-radius: 1rem;
`
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 90%;
    margin: 0 auto;
    border-radius: 1rem;
`
const Title = styled.p`
    font-size: 2rem;
    font-weight: 700;
    color: ${colorsui.primaryColor};
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
`
const CustomInput = styled(TextField)`
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 1rem;
    max-width: 500px;
    background-color: ${colorsui.backGroundGray};
    .MuiInputBase-root{
        color: ${colorsui.primaryColor};
    }
    .MuiFormLabel-root{
        color: ${colorsui.primaryColor};
    }
    .MuiOutlinedInput-root{
        fieldset{
            border-color: ${colorsui.primaryColor};
        }
        &:hover fieldset{
            border-color: ${colorsui.primaryColor};
        }
        &.Mui-focused fieldset{
            border-color: ${colorsui.primaryColor};
        }
    }
    .MuiFormHelperText-root{
        color: ${colorsui.primaryColor};
    }
    .MuiInputBase-input{
        color: ${colorsui.primaryColor};
    }
    .MuiInputBase-input::placeholder{
        color: ${colorsui.primaryColor};
    }
    .MuiInputBase-input:-webkit-autofill,
    .MuiInputBase-input:-webkit-autofill:hover,
    .MuiInputBase-input:-webkit-autofill:focus,
    .MuiInputBase-input:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px ${colorsui.backGroundGray} inset !important;
    }
    .MuiInputBase-input:-webkit-autofill {
        -webkit-text-fill-color: ${colorsui.primaryColor} !important;
    }
    .MuiInputBase-input:focus{
        color: ${colorsui.primaryColor};
    }
    .MuiInputBase-input:hover{
        color: ${colorsui.primaryColor};
    }
    .MuiInputBase-input:active{
        color: ${colorsui.primaryColor};
    }
`

export const FormContact = () => {

    // state
    const [state, handleSubmit] = useForm("mwkdpyzj");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Error state for inputs
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");


    const handleName = (e: any ) => {
        const value = e.target.value;
        setName(value);
        console.log(value);
        if( value == "" ){
            setNameError("Name is required")
        }else if(value.length < 3){
            setNameError("Name must be at least 3 characters long")
        }else if(value.length > 20){
            setNameError("Name must be less than 20 characters long")
        }else{
            setNameError("")
            /* setName(value) */
        }
    }
    const handleEmail = (e: any) => {
        const value = e.target.value;
        setEmail(value);
        if(value == "" ){
            setEmailError("Email is required")
        }else if(value.length < 3){
            setEmailError("Email must be at least 3 characters long")
        }else if(value.length > 20){
            setEmailError("Email must be less than 20 characters long")
        }else if(!value.includes("@") || !value.includes(".")){
            setEmailError("Email must be valid")
        }else{
            setEmailError("")
            setEmail(value)
        }
    }
    const handleMessage = (e: any) => {
        const value = e.target.value;
        setMessage(value);
        if( value == "" ){
            setMessageError("Message is required")
        }else if(value.length < 3){
            setMessageError("Message must be at least 3 characters long")
        }else if(value.length > 100){
            setMessageError("Message must be less than 100 characters long")
        }else{
            setMessageError("")
            setMessage(value)
        }
    }
    const onSubmit = (e: any) => {
        e.preventDefault();

        if(name != "" && email != "" && message != "" ){
            setName("");
            setEmail("");
            setMessage("");
            toast.success('Message sent successfully');
            handleSubmit(e);
            console.log(state);
            console.log(state.succeeded);
            console.log("enviado");
        }else if (state.errors){
            if(name == "" || name == undefined) {
                setNameError("Name is required")
                toast.error('Name is required');
            }else if(email == "" || email == undefined){
                setEmailError("Email is required")
                toast.error('Email is required');
            }else if(message == "" || message == undefined){
                setMessageError("Message is required")
                toast.error('Message is required');
            }
        }
    }

    return(
        <Form onSubmit={onSubmit}>
            <Title>Contact me</Title>
            <Inputs>
                <CustomInput 
                    id="name" 
                    label="Name" 
                    variant="standard" 
                    name="name" 
                    helperText={nameError}
                    onChange={handleName}
                    error={Boolean(nameError)}
                    value={name}
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
                <CustomInput
                    id="email"
                    label="Email"
                    variant="standard"
                    name="email"
                    helperText={emailError}
                    onChange={handleEmail}
                    error={Boolean(emailError)}
                    value={email}
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                /> 
                <CustomInput
                    id="message"
                    label="Message"
                    variant="standard"
                    name="message"
                    helperText={messageError}
                    onChange={handleMessage}
                    error={Boolean(messageError)}
                    multiline
                    rows={4}
                    value={message}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <Button 
                    variant='contained' 
                    type="submit" 
                >
                    Send
                </Button>  
            </Inputs>
            <Toaster position='bottom-center' richColors />
        </Form> 

    )
}