import React, { useState } from 'react'
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa"
import { useTheme } from 'styled-components';

import { firestore } from "../../Fire";
import { CheckboxInput, CheckboxLabel, TextAreaInput, TextInput, Button } from '../../utils/styles/forms';
import { FormError } from '../misc/Misc';
import { H1, H3, Label, LLink } from '../../utils/styles/text.js';
import { Centered, Column, Grid, Row } from '../../utils/styles/misc.js';
import { INPUT } from '../../utils/constants.js';

function ContactForm(props) {
    const theme = useTheme();
    const contactForm = useForm({
        defaultValues: {
            name: "",
            email: "",
            body: "",
            policyAccept: false
        }
    });

    const [submitting, setSubmitting] = useState({ 
        message: false,
    }); 
    const [submitted, setSubmitted] = useState({ 
        message: false,
    });

    const submitMessage = (data) => {   
        setSubmitting(prevState => ({
            ...prevState,
            message: true
        }));
        const currentTime = Timestamp.now();
        addDoc(collection(firestore, "messages"), {
            name: data.name,
            email: data.email,
            body: data.body,
            timestamp: currentTime,
        }).then(() => {
            setSubmitting(prevState => ({
                ...prevState,
                message: false
            }));
            setSubmitted(prevState => ({
                ...prevState,
                message: true
            }));
            toast.success(`Message submitted successfully, thanks!`);
            contactForm.reset();
        }).catch(error => {
            toast.error(`Error submitting message. Please try again or if the problem persists, contact ${props?.site?.emails?.support ?? "help@minute.tech"}.`);
            console.error("Error submitting message: " + error);
            setSubmitting(prevState => ({
                ...prevState,
                message: false
            }));
        });
    }

    if(submitted.message){
        return (
            <>
            <H1>Contact Form</H1>
            <Centered>
                <H3 color={theme.colors.green}><FaCheck /> Submitted.</H3>
            </Centered>
            </>
        )
    } else {
        return (
            <>
                <H1>Contact Form</H1>
                <form onSubmit={ contactForm.handleSubmit(submitMessage) }>
                    <Grid fluid>
                        <Row>
                            <Column sm={12} md={6}>
                                <Label htmlFor={INPUT.NAME.KEY} br>{INPUT.NAME.LABEL}:</Label>
                                <TextInput 
                                    type="text" 
                                    error={contactForm.formState.errors[INPUT.NAME.KEY]}
                                    placeholder={`${INPUT.NAME.PLACEHOLDER}`} 
                                    { 
                                        ...contactForm.register(INPUT.NAME.KEY, {
                                            required: INPUT.NAME.ERRORS.REQUIRED,
                                            maxLength: {
                                                value: INPUT.NAME.ERRORS.MAX.KEY,
                                                message: INPUT.NAME.ERRORS.MAX.MESSAGE
                                            },
                                            minLength: {
                                                value: INPUT.NAME.ERRORS.MIN.KEY,
                                                message: INPUT.NAME.ERRORS.MIN.MESSAGE
                                            },
                                        })
                                    } 
                                />
                                <FormError error={contactForm.formState.errors[INPUT.NAME.KEY]} /> 
                            </Column>
                            <Column sm={12} md={6}>
                                <Label htmlFor={INPUT.EMAIL.KEY} br>{INPUT.EMAIL.LABEL}:</Label>
                                <TextInput 
                                    type="text" 
                                    error={contactForm.formState.errors[INPUT.EMAIL.KEY]}
                                    placeholder={INPUT.EMAIL.PLACEHOLDER} 
                                    {
                                        ...contactForm.register(INPUT.EMAIL.KEY, { 
                                                required: INPUT.EMAIL.ERRORS.REQUIRED,
                                                pattern: {
                                                    value: INPUT.EMAIL.ERRORS.PATTERN.KEY,
                                                    message: INPUT.EMAIL.ERRORS.PATTERN.MESSAGE
                                                },
                                            }
                                        )
                                    } 
                                />
                                <FormError error={contactForm.formState.errors[INPUT.EMAIL.KEY]} /> 
                            </Column>
                        </Row>
                        <Row>
                            <Column sm={12}>
                                <Label htmlFor={INPUT.BODY.KEY} br>{INPUT.BODY.LABEL}:</Label>
                                <TextAreaInput 
                                    placeholder={INPUT.BODY.PLACEHOLDER}  
                                    error={contactForm.formState.errors[INPUT.BODY.KEY]}
                                    {
                                        ...contactForm.register(INPUT.BODY.KEY, {
                                            required: INPUT.BODY.ERRORS.REQUIRED,
                                            maxLength: {
                                                value: INPUT.BODY.ERRORS.MAX.KEY,
                                                message: INPUT.BODY.ERRORS.MAX.MESSAGE
                                            },
                                            minLength: {
                                                value: INPUT.BODY.ERRORS.MIN.KEY,
                                                message: INPUT.BODY.ERRORS.MIN.MESSAGE
                                            },
                                        })
                                    } 
                                />
                                <FormError error={contactForm.formState.errors[INPUT.BODY.KEY]} /> 
                            </Column>
                        </Row>
                        <Row>
                            <Column sm={12} textalign="center">
                                <CheckboxInput 
                                    error={contactForm.formState.errors.policyAccept}
                                    {
                                        ...contactForm.register("policyAccept", {
                                            required: "Please accept the policies by checking the box above.",
                                        })
                                    } 
                                />
                                <CheckboxLabel>
                                    I accept the&nbsp;
                                    <LLink to="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</LLink> and&nbsp;
                                    <LLink to="/terms-conditions" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</LLink>.
                                </CheckboxLabel>
                                <FormError error={contactForm.formState.errors.policyAccept} /> 
                            </Column>
                        </Row>
                        <Row>
                            <Column sm={12} textalign="center">
                                <Button 
                                    type="submit" 
                                    disabled={submitting.message}
                                >
                                    Submit
                                </Button>
                            </Column>
                        </Row>
                    </Grid>
                </form>
            </>
        )
    }
}

export default ContactForm;