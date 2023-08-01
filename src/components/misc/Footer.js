import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { FaChevronUp } from 'react-icons/fa';

import { SIZES } from '../../utils/constants';
import { FooterContainer } from "../../utils/styles/footer";
import { Button } from '../../utils/styles/forms';
import { Column, Grid, Hr, ModalCard, ModalContainer, Row } from '../../utils/styles/misc';
import { H3, LLink, SLink } from "../../utils/styles/text";
import { Feedback } from './Feedback';

function Footer(props) {
    const [shownModals, setShownModals] = useState([]); 
    const year = new Date().getFullYear();

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleModal = (newStatus, index) => {
        let tempShownModals = [...shownModals]
        tempShownModals[index] = newStatus
        setShownModals(tempShownModals);
    };

    return (
        <>
            <FooterContainer>
                <Grid fluid>
                    <Row justify="between">
                        <Column sm={12} md={4} margin="5px 0">
                            <Row>
                                <Column lg={12} xl={3}>
                                    <LLink to="/privacy-policy">Privacy Policy</LLink>
                                </Column>  
                                <Column lg={12} xl={3}>
                                    <LLink to="/terms-conditions">Terms &amp; Conditions</LLink>
                                </Column>  
                                <Column lg={12} xl={3}>
                                    <LLink to="/credits">Credits</LLink>
                                </Column>  
                                <Column lg={12} xl={3}>
                                    <SLink onClick={() => toggleModal(true, "feedback")} >Feedback?</SLink>
                                </Column>  
                            </Row>
                        </Column>
                        <Column sm={12} md={4} margin="5px 0">
                            <SLink>
                                {props?.site?.name ?? ""}
                                {' '}
                                &copy;
                                {' '}
                                {year}
                            </SLink>
                        </Column>
                        <Column sm={12} md={4} margin="5px 0">
                            <SLink onClick={() => backToTop()}>
                                Back to top <FaChevronUp /> 
                            </SLink>
                        </Column>
                    </Row>    
                </Grid>
            </FooterContainer>

            {shownModals["feedback"] && (
                <ModalContainer onClick={() => toggleModal(false, "feedback")}>
                    <ModalCard onClick={(e) => e.stopPropagation()}>
                        <H3>Feedback</H3>
                        <Feedback
                            site={props.site}
                            user={props.user}
                            toggleModal={toggleModal}
                        />
                        <Hr />
                        <Button 
                            type="button"
                            size={SIZES.SM} 
                            onClick={() => toggleModal(false, "feedback")}
                        >
                            <CgClose /> Close 
                        </Button>
                    </ModalCard>
                </ModalContainer>
            )}
        </>
        
    )
}

export default Footer;