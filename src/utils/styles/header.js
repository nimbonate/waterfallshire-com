import { rgba } from 'polished';
import { NavLink } from 'react-router-dom';
import styled  from 'styled-components';
import { BodyFont, HeadingFont } from './text';

const activeClassName = "active";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
`;

// Branding
export const BrandContainer = styled.div`
    width: 100%;
`;

export const BrandLink = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    height: ${props => props.height ? `${props.height}px` : ""};
    max-height: ${props => props.height ? `${props.height}px` : ""};  
    white-space: nowrap;
    overflow: hidden;
`;

export const NavLogo = styled.img`
    width: 100%;
    height: ${props => props.height ? `${props.height}px` : "auto"};
    max-width: ${props => props.width ? `${props.width}px` : "150px"}; 
    margin: 15px 10px;
    
    @media (max-width: 992px) {
        max-width: ${props => props.width ? `${props.width * .8}px` : "100px"}; 
        height: ${props => props.height ? `${props.height * .8}px` : "100px"}; 
    }
`;

export const NavTitle = styled.span`
    ${HeadingFont}
    font-size: ${props => props.size ? props.size : "2.5em"}; 
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.15s linear;

    &:hover {
        text-decoration: none;
        color: ${props => props.theme.colors.secondary};
    }
    
    @media (max-width: 992px) {
        font-size: 1.8em;
    }
`;

// Nav Menu
export const NavMenuContainer = styled.nav`
    display: inline;
    
    @media (max-width: 992px) {
        display: none;
    }
`;

export const NavLinks = styled.span`
    ${BodyFont};
    float: right;
    padding-right: 25px;
`;

export const NavLLink = styled(NavLink)`
    transition: color 0.15s linear, border-bottom 0.15s linear;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
    margin: 0 18px;
    padding: 5px 0;

    &.${activeClassName} {
        border-bottom: 2px solid ${props => props.theme.colors.secondary};
    }

    &:hover {
        border-bottom: 2px solid ${props => props.theme.colors.secondary};
        font-weight: 700;
        color: ${props => props.theme.colors.secondary};
    };

    @media (max-width: 992px) {
        font-size: 14px;
    }

`;

// Burger Menu 
export const BgOverlay = styled.div`
    display: ${({ open }) => open ? 'inline' : 'none'};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${rgba("grey", 0.7)};
    transition: opacity 0.8s;
    z-index: 7;
`;

export const BurgerNavContainer = styled.span`
    display: none;

    @media (max-width: 992px) {
        display: inline;
    }
`;

export const Burger = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-right: 25px;
    &:focus {
        outline: none;
    }

    div {
        position: absolute;
        z-index: 9;
        width: 2rem;
        height: 0.25rem;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        background-color: ${props => props.color ? props.color : props.theme.colors.primary};

        :first-child {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

export const BurgerNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.color ? props.color : props.theme.colors.background};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    height: 100vh;
    text-align: center;
    max-width: 500px;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 8;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 992px) {
        width: 100%;
    }
`;

export const BurgerNavLink = styled(NavLink)`
    ${BodyFont}
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${props => props.color ? props.color : props.theme.fonts.body.color} !important;
    text-decoration: none;
    transition: all 0.3s linear;

    @media (max-width: 992px) {
        font-size: 1.5rem;
        text-align: center;
    }

    &:hover {
        background-color: ${props => props.theme.colors.primary};
    }

    &.${activeClassName} {
        background-color: ${props => props.theme.colors.primary};
    }

`;
