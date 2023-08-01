import React from 'react';

import { BTYPES, SIZES } from '../../utils/constants.js';
import { Button } from '../../utils/styles/forms'
import { ModalCard } from '../../utils/styles/misc';
import { Body, H3 } from '../../utils/styles/text';

function ConfirmAlert(props) {
    const yesClicked = () => {
        console.log("User accepted confirmation.")
        props.yesFunc();
        props.onClose();
    }

    const noClicked = () => {
        console.log("User denied confirmation.")
        props.noFunc()
        props.onClose();
    }

    return (
        // ** I need to pass the theme to each of these components separately because it is undefined in the ConfirmAlert library.
        <ModalCard theme={props.theme}>
            <H3 theme={props.theme}>{props.headingText}</H3>
            <Body theme={props.theme}>{props.body}</Body>
            <Button 
                type="button"
                size={SIZES.SM}
                theme={props.theme}
                color={props.theme.colors.green}
                onClick={() => yesClicked()}
            >
                {props.yesText}
            </Button>
            <Button
                type="button"
                size={SIZES.SM}
                theme={props.theme}
                color={props.theme.colors.red}
                btype={BTYPES.INVERTED}
                onClick={() => noClicked()}
            >
                {props.noText}
            </Button>
        </ModalCard>
    )
}

export default ConfirmAlert;
