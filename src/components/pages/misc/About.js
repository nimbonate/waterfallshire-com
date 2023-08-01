import React from 'react';
import { Helmet } from 'react-helmet-async';

import { ANIMAL_GALLERY } from '../../../utils/constants';
import { Centered, Hr, Wrapper } from '../../../utils/styles/misc';
import { Body, H1, H3 } from '../../../utils/styles/text';
import ContactForm from '../../misc/ContactForm';
import PhotoGallery from '../../misc/PhotoGallery';

function About(props){
    return (
        <Wrapper>
            <Helmet>
                <title>About {props.site.name ? `| ${props.site.name}` : ""}</title>
            </Helmet>
            <H1>About</H1>
            
            <Body>
                Coming soon
            </Body>
            <Centered>
                <H3>Animal Gallery</H3>
                <PhotoGallery photos={ANIMAL_GALLERY} />
            </Centered>
            
            <Hr/>
            <ContactForm />
        </Wrapper>
    );
}

export default About;