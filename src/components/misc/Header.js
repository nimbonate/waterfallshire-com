import React, { useState } from 'react';
import { BurgerNavLink, NavLLink, NavLogo, NavTitle, HeaderContainer, NavLinks, BurgerNavContainer, NavMenuContainer, BrandContainer, BgOverlay, BrandLink } from '../../utils/styles/header';
import { Burger, BurgerNav } from '../../utils/styles/header';
import { FullWidthLine } from '../../utils/styles/misc';

function Header(props) {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const navLinks = [
        {
            label: "Home",
            path: "/",
            type: ""
        },
        {
            label: "About",
            path: "/about",
            type: ""
        },
    ];
    
    return (
        <>
        <HeaderContainer>
            <BrandContainer>
                <BrandLink to="/" height={props.site.logo.height} end>
                    <NavLogo 
                        width={props.site.logo.width}
                        height={props.site.logo.height}
                        margin="0" 
                        src={props.site.logo.url} 
                        // src={require("../../assets/images/logos/logo.png")}
                    />
                    {props.site.logo.showTitle && (<NavTitle removeActiveStyle>{props?.site?.name ?? ""}</NavTitle>)}
                </BrandLink>
            </BrandContainer>

            {/* Desktop menu */}
            <NavMenuContainer>
                <NavLinks>
                    {navLinks.map((link, l) => {
                        return (
                            <NavLLink key={l} to={link.path}>{link.label}</NavLLink>
                        )
                    })}
                </NavLinks>
            </NavMenuContainer>
            <BurgerNavContainer>
                <BgOverlay 
                    open={isBurgerMenuOpen} 
                    onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)} 
                />
                <Burger 
                    open={isBurgerMenuOpen} 
                    onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)}
                >
                    <div />
                    <div />
                    <div />
                </Burger>
                
                <BurgerNav open={isBurgerMenuOpen}>
                    {navLinks.map((link, l) => {
                        return (
                            <BurgerNavLink 
                                key={l} 
                                to={link.path}
                                onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)}
                            >
                                {link.label}
                            </BurgerNavLink>
                        )
                    })}
                </BurgerNav>
            </BurgerNavContainer>

        </HeaderContainer>
        <FullWidthLine height={"5px"}/>
        </>
    )
}

export default Header;