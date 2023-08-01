import React, { useState } from 'react'
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useTheme } from 'styled-components';
import { useForm } from "react-hook-form";

import { firestore } from "../../Fire.js";
import { Centered, Column, Grid, Hr, Row } from '../../utils/styles/misc';
import { Body, H4, Label } from '../../utils/styles/text';
import { INPUT, SIZES } from '../../utils/constants.js';
import { Emoji } from '../../utils/styles/images.js';
import { Button, Slider, TextAreaInput } from '../../utils/styles/forms.js';
import { FormError } from './Misc.js';
import { ucFirstLetterEachWord } from '../../utils/misc';


export function Feedback(props) {
    const theme = useTheme();
    const [rangeValue, setRangeValue] = useState(50);
    const [submitted, setSubmitted] = useState({ 
        feedback: false,
    });
    const [submitting, setSubmitting] = useState({
        feedback: false,
    }); 
    const feedbackForm = useForm({
        defaultValues: {
            body: "",
        }
    });

    const submitFeedback = (data) => {
        setSubmitting(prevState => ({
            ...prevState,
            feedback: true
        }));

        if (rangeValue === 50 && !data.body) {
            toast.error("Please submit a non-neutral response by sliding the square to the left/right or entering a message.");
            setSubmitting(prevState => ({
                ...prevState,
                feedback: false
            }));
        } else {
            let emotionLabel = "";
            let emotionSymbol = "";
            if (rangeValue < 25) {
                emotionLabel="very unhappy"
                emotionSymbol = "0x1F621"
            } else if (rangeValue >= 25 && rangeValue < 50) {
                emotionLabel="unhappy"
                emotionSymbol = "0x1F641"
            } else if (rangeValue > 50 && rangeValue < 75) {
                emotionLabel="happy"
                emotionSymbol = "0x1F642"
            } else if (rangeValue >= 75 && rangeValue <= 100) {
                emotionLabel="very happy"
                emotionSymbol = "0x1F604"
            }
            const currentTime = Timestamp.now();
            addDoc(collection(firestore, "feedback"), {
                rangeValue: rangeValue,
                emotionLabel: emotionLabel,
                emotionSymbol: emotionSymbol,
                body: data.body,
                timestamp: currentTime,
            }).then((docRef) => {
                setSubmitting(prevState => ({
                    ...prevState,
                    feedback: false
                }));
                setSubmitted(prevState => ({
                    ...prevState,
                    feedback: true
                }));
                toast.success("Feedback submitted")
            }).catch(error => {
                toast.error(`Error submitting feedback. Please try again or if the problem persists, contact ${props?.site?.emails?.support ?? "help@minute.tech"}.`);
                console.error("Error submitting feedback: " + error);
                setSubmitting(prevState => ({
                    ...prevState,
                    feedback: false
                }));
            });
        }

        
    }


    return (
        <>
            { !submitted.feedback &&  (
                <Centered>
                    <H4>How was your experience?</H4>
                    <Body margin="0" color={theme.colors.green} size={SIZES.SM}><b>(slide the square)</b></Body>
                    <Slider color={theme.colors.primary}>
                        <input 
                            type="range"
                            min={0}
                            max={100}
                            value={rangeValue}
                            onChange={(e) => setRangeValue(e.target.value)}
                        />
                    </Slider>
                    
                    {renderEmotion(rangeValue, "3em")}
                    <Hr/>
                    <form onSubmit={ feedbackForm.handleSubmit(submitFeedback) }>
                        <Grid fluid>
                            <Row>
                                <Column sm={12} textalign="center">
                                    <Label htmlFor={INPUT.BODY.KEY} br>Anything else you'd like to add?</Label>
                                    <TextAreaInput
                                        height={100}
                                        placeholder={INPUT.BODY.PLACEHOLDER}  
                                        error={feedbackForm.formState.errors[INPUT.BODY.KEY]}
                                        {
                                            ...feedbackForm.register(INPUT.BODY.KEY, {
                                                maxLength: {
                                                    value: INPUT.BODY.ERRORS.MAX.KEY,
                                                    message: INPUT.BODY.ERRORS.MAX.MESSAGE
                                                },
                                            })
                                        } 
                                    />
                                    <FormError error={feedbackForm.formState.errors[INPUT.BODY.KEY]} /> 
                                </Column>
                            </Row>
                            <Row>
                                <Column sm={12} textalign="center">
                                    <Button 
                                        type="submit" 
                                        disabled={submitting.feedback}
                                    >
                                        Submit
                                    </Button>
                                </Column>
                            </Row>
                        </Grid>
                    </form>
                </Centered>
            )}

            { submitted.feedback && (
                <Centered>
                    <H4 color={theme.colors.green}>Thanks for the feedback!</H4>
                </Centered>
            )}
        </>
    )
};

// TODO: convert to useMemo
export const EmojiWithText = React.memo(({ className, label, symbol, size }) =>
    <Body margin="0" className={className} role="img" aria-label={label}>
        <Emoji
            display="block"
            size={size}
        >
            {String.fromCodePoint(symbol)}
        </Emoji>
        <b>{ucFirstLetterEachWord(label)}</b>
    </Body>
);

export function renderEmotion (rangeValue, size = "1em"){
    if(rangeValue < 25){
        return (
            <EmojiWithText size={size} symbol="0x1F621" label="very unhappy"/>
        )
    } else if(rangeValue >= 25 && rangeValue < 50) {
        return (
            <EmojiWithText size={size} symbol="0x1F641" label="unhappy"/>
        )
    } else if(Number(rangeValue) === 50) {
        return (
            <EmojiWithText size={size} symbol="0x1F610" label="neutral"/>
        )
    } else if(rangeValue > 50 && rangeValue < 75) {
        return (
            <EmojiWithText size={size} symbol="0x1F642" label="happy"/>
        )
    } else if(rangeValue >= 75 && rangeValue <= 100) {
        return (
            <EmojiWithText size={size} symbol="0x1F604" label="very happy"/>
        )
    }
};