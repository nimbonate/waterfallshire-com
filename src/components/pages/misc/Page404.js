import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BiError } from 'react-icons/bi';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../utils/styles/forms';
import { Wrapper } from '../../../utils/styles/misc';
import { ALink, Body, H1 } from '../../../utils/styles/text';

function Page404 (props){
    const navigate = useNavigate();
    return (
        <Wrapper>
            <Helmet>
                <title>404 Error {props.site.name ? `| ${props.site.name}` : ""}</title>
            </Helmet>
            <Button onClick={() => navigate(-1)}>
                <FaChevronLeft  />
                &nbsp; Go back
            </Button>
            <H1><BiError /> Page Not Found</H1>
            <Body>Sorry, but it looks like the page you were looking for was not found in our directory. Please check the address, or contact <ALink href={`mailto:${props?.site?.emails?.support ?? "help@minute.tech"}`}>{props?.site?.emails?.support ?? "help@minute.tech"}</ALink>.</Body>
        </Wrapper>
    );
}

export default Page404;
