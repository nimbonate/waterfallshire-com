import styled, { css }  from 'styled-components';
import { Link } from "react-router-dom";
import { SIZES } from '../constants';

export const HeadingFont = css`
    color: ${props => props.theme?.fonts?.heading?.color ?? "black"};
    font-family: ${props => props.theme?.fonts?.heading.name ?? "Arial, Helvetica, sans-serif"};
`;

export const BodyFont = css`
    color: ${props => props.theme?.fonts?.body?.color ?? "black"};
    font-family: ${props => props.theme?.fonts?.body.name ?? "Arial, Helvetica, sans-serif"};
`;

// Headings //
export const H1 = styled.h1`
    font-size: 50px;
    ${HeadingFont};
    
    ${(props) => (props.color) && `
        color: ${props.color} !important;
    `};
    
    font-weight: 900;
    margin: ${props => props.margin ? props.margin : "10px 0"};
    display: ${props => props.inline ? "inline" : "block"};
    @media (max-width: 992px) {
        font-size: 35px;
    }
`;

export const H2 = styled.h2`
    font-size: 40px;
    ${HeadingFont};
    
    ${(props) => (props.color) && `
        color: ${props.color} !important;
    `};

    margin: ${props => props.margin ? props.margin : "10px 0"};
    display: ${props => props.inline ? "inline" : "block"};
    @media (max-width: 992px) {
        font-size: 25px;
        /* margin-bottom: 15px; */
    }
`;

export const H3 = styled.h3`
    font-size: 30px;
    ${HeadingFont};
    
    ${(props) => (props.color) && `
        color: ${props.color} !important;
    `};

    margin: ${props => props.margin ? props.margin : "10px 0"};
    display: ${props => props.inline ? "inline" : "block"};
    @media (max-width: 992px) {
        font-size: 20px;
    }
`;

export const H4 = styled.h4`
    font-size: 24px;
    ${HeadingFont};
    
    ${(props) => (props.color) && `
        color: ${props.color} !important;
    `};

    margin: ${props => props.margin ? props.margin : "10px 0"};
    display: ${props => props.inline ? "inline" : "block"};
    @media (max-width: 992px) {
        font-size: 18px;
    }
`;

// Paragraph Body
export const Body = styled.p`
    /* "spanned" is used for an inline, no margin text with all the body attributes like size! */
    margin: ${props => (props.spanned ? "0" : (props.margin ? props.margin : "1em 0"))};
    display: ${props => (props.spanned ? "inline" : (props.display ? props.display : "block"))};
    text-align: ${props => props.textAlign ? props.textAlign : ""};
    font-weight: ${props => props.bold ? 900 : 0};
    ${BodyFont};

    ${(props) => (props.color) && `
        color: ${props.color} !important;
    `};

    ${(props) => (props.size === SIZES.XS) && `
        font-size: 10px;
        @media (max-width: 992px) {
            font-size: 8px;
        }
    `};

    ${(props) => (props.size === SIZES.SM) && `
        font-size: 14px;
        @media (max-width: 992px) {
            font-size: 12px;
        }
    `};

    ${(props) => (props.size === SIZES.MD || !props.size) && `
        font-size: 18px;
        @media (max-width: 992px) {
            font-size: 16px;
        }
    `};

    ${(props) => (props.size === SIZES.LG) && `
        font-size: 22px;
        @media (max-width: 992px) {
            font-size: 20px;
        }
    `};

    ${(props) => (props.size === SIZES.XL) && `
        font-size: 28px;
        @media (max-width: 992px) {
            font-size: 24px;
        }
    `};

    ${(props) => (props.hoverColor) && `
        &:hover {
            color: ${props.hoverColor} !important;
            cursor: pointer;
        }
    `};  
`;

// Links
export const ALink = styled.a`
    cursor: pointer;
    ${BodyFont};
    color: ${props => props.color ? props.color : (props.theme?.fonts?.link?.color ?? "navy")} !important;
    text-decoration: none;
    transition: color 0.15s linear;
    margin: ${props => props.margin ? props.margin : "0"};
    &:hover {
        color: ${props => (props.theme?.colors?.yellow || "gold")} !important;
        text-decoration: none;
    }
`;

export const LLink = styled(Link)`
    ${BodyFont};
    color: ${props => props.color ? props.color : (props.theme?.fonts?.link?.color || "navy")} !important;
    cursor: pointer;
    margin: ${props => props.margin ? props.margin : "0"};
    text-decoration: none;
    transition: color 0.15s linear;
    &:hover {
        color: ${props => (props.theme?.colors?.yellow ?? "gold")} !important;
        text-decoration: none;
    }
`;

export const SLink = styled.span`
    ${BodyFont};
    color: ${props => props.color ? props.color : (props.theme?.fonts?.link?.color ?? "navy")} !important;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.15s linear;
    margin: ${props => props.margin ? props.margin : "0"};
    &:hover {
        color: ${props => (props.theme?.colors?.yellow ?? "gold")} !important;
        text-decoration: none;
    }
`;

export const Anchor = styled.a`
    font-size: 0;
    display: block;
    position: relative;
    top: -100px;
    visibility: hidden;
`;

//  Misc
export const Label = styled.label`
    ${BodyFont};
    display: ${props => props.br ? "block" : "inline-block"};
    font-weight: 700;
    margin: ${props => props.margin ? props.margin : "0 0 5px 0"};
    
    ${(props) => (props.size === SIZES.XS) && `
        font-size: 12px;
        @media (max-width: 992px) {
            font-size: 10px;
        }
    `};

    ${(props) => (props.size === SIZES.SM) && `
        font-size: 16px;
        @media (max-width: 992px) {
            font-size: 14px;
        }
    `};

    ${(props) => (props.size === SIZES.MD || !props.size) && `
        font-size: 20px;
        @media (max-width: 992px) {
            font-size: 18px;
        }
    `};

    ${(props) => (props.size === SIZES.LG) && `
        font-size: 24px;
        @media (max-width: 992px) {
            font-size: 22px;
        }
    `};

    ${(props) => (props.size === SIZES.XL) && `
        font-size: 30px;
        @media (max-width: 992px) {
            font-size: 26px;
        }
    `};
`;

export const ErrorText = styled.div`
    ${BodyFont};
    color: ${props => (props.theme?.colors?.red ?? "firebrick")} !important;
    margin: ${props => props.margin ? props.margin : "5px 0 0 0"};
    font-weight: 900;
`;

export const Ol = styled.ol`
    ${BodyFont};
`;

export const Ul = styled.ul`
    ${BodyFont};
    margin: ${props => props.margin ? props.margin : "0px"};
`;

export const Li = styled.li`
    ${BodyFont}
`;