import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wrapper } from '../../../utils/styles/misc';
import { ALink, Body, H1, Li, Ul } from '../../../utils/styles/text';

function Credits(props) {
    return (
        <Wrapper>
            <Helmet>
                <title>Credits {props.site.name ? `| ${props.site.name}` : ""}</title>
            </Helmet>
            <H1>Credits</H1>
            <Body>Attributions to those who helped make this website happen.</Body>
            <Ul>
                <Li>Designed and built by <ALink href="https://minute.tech" target="_blank" rel="noopener">Minute.tech</ALink></Li>
                <Li>Support from Mom &amp; Dad</Li>
            </Ul>
        </Wrapper>
    );
}

export default Credits;
