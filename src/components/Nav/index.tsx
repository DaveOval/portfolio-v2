import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { colorsui } from '../../ui/colors';
import { Tooltip } from '@mui/material';
import { useState } from 'react';

interface FloatLinksProps {
    visible: boolean;
}

const NavContainer = styled.div`
    width: 100%;
    height: 10vh;
    min-height: 60px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0c1116e9;
    border-bottom: 1px solid ${colorsui.secondaryColor};
    backdrop-filter: blur(15px);
    position: fixed;
    top: 0;
    z-index: 100;
    @media (min-width: 768px) {
        height: 8vh;
    }
`
const LeftNav = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
`
const Logo = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin: 0 15px;
`
const LinksContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;    
    display: none;
    @media (min-width: 768px) {
        display: flex;
    }
`
const Links = styled.a`
    text-decoration: none;
    color: ${colorsui.secondaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1/1;
`
const Socials = styled.img`
    width: 25px;
    height: 25px;
    filter: invert(1);
`
const RightNav = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const MenuLink = styled(Link)`
    text-decoration: none;
    color: ${colorsui.secondaryColor};
    font-size: 1.0;
    font-weight: 100;
    letter-spacing: 2px;
    transition: all 0.2s ease-in-out;
    padding: 0.5rem 1.0rem;
    border-radius: 10px;
    &:hover {
        background-color: ${colorsui.secondaryColor};
        color: ${colorsui.backGroundColor};
    }
    &:active {
        scale: 0.9;
    }
`
const MenuLinks = styled.div`
    display: none;
    flex-wrap: wrap;
    gap: 1.0rem;
    @media (min-width: 768px) {
        display: flex;
    }
`
const CheckBox = styled.input`
    display: none;
`
const CheckBoxLabel = styled.label`
    display: block;
    width: 25px;
    height: 25px;
    background-image: url('./public/menu.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    filter: invert(1);
    transition: all 0.1s ease-in-out;
    &:active {
        scale: 0.9;
    }
    @media (min-width: 768px) {
        display: none;
    } 
`
const FloatLinks = styled.div<FloatLinksProps>`
    transition: all 0.3s ease-in-out;
    background-color: #0c1116e9;
    width: 90%;
    max-width: 300px;
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    top: 11vh;
    visibility: ${props => (props.visible ? "visible" : "hidden")};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    padding: 2.0rem;
    border-radius: 10px;
    backdrop-filter: blur(15px);
`
const FloatLinksFirstDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.5rem;
    padding-bottom: 1.0rem;
    border-bottom: 1px solid ${colorsui.secondaryColor};
`
const FloatLinksSecondDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.1rem;
`
export const Navbar = () =>{
    const [LinksVisible, setLinksVisible] = useState(false);
    return(
        <NavContainer>
            <LeftNav>
                <Link to="/">
                    <Logo src="./favicon.svg" alt="logo"/>
                </Link>
                <LinksContainer>
                    <Links href="https://github.com/DaveOval" target="_blank">
                        <Tooltip title="Github" placement="bottom" arrow>
                            <Socials src="./socials-icons/github.svg" alt="github link" />
                        </Tooltip>
                    </Links>
                    <Links href="https://www.instagram.com/dave_oval/" target="_blank">
                        <Tooltip title="Instagram" placement="bottom" arrow>
                            <Socials src="./socials-icons/instagram.svg" alt="instagram link" />
                        </Tooltip>
                    </Links>
                    <Links href="https://www.linkedin.com/in/david-vazquez-developer/" target="_blank">
                        <Tooltip title="Linkedin" placement="bottom" arrow>
                            <Socials src="./socials-icons/linkedin.svg" alt="linkedin link" />
                        </Tooltip>
                    </Links>
                    <Links href="https://twitter.com/daveultrau" target="_blank">
                        <Tooltip title="Twitter" placement="bottom" arrow>
                            <Socials src="./socials-icons/twitter.svg" alt="twitter link" />
                        </Tooltip>
                    </Links>
                </LinksContainer>
            </LeftNav>
            <RightNav>
                <CheckBoxLabel htmlFor="showhidde"></CheckBoxLabel>
                <CheckBox type="checkbox" id='showhidde' checked={LinksVisible} onChange={() => setLinksVisible(!LinksVisible)}/>
                <MenuLinks>
                    <MenuLink to="/experience">Experience</MenuLink>
                    <MenuLink to="/projects">Projects</MenuLink>
                    <MenuLink to="/contact">Contact</MenuLink>
                </MenuLinks>
            </RightNav>
            <FloatLinks visible={LinksVisible}>
                <FloatLinksFirstDiv>
                    <Links href="https://github.com/DaveOval" target="_blank">
                        <Socials src="./socials-icons/github.svg" alt="github link" />
                    </Links>
                    <Links href="https://www.instagram.com/dave_oval/" target="_blank">
                        <Socials src="./socials-icons/instagram.svg" alt="instagram link" />
                    </Links>
                    <Links href="https://www.linkedin.com/in/david-vazquez-developer/" target="_blank">
                        <Socials src="./socials-icons/linkedin.svg" alt="linkedin link" />
                    </Links>
                    <Links href="https://twitter.com/daveultrau" target="_blank">
                        <Socials src="./socials-icons/twitter.svg" alt="twitter link" />
                    </Links>
                </FloatLinksFirstDiv>
                <FloatLinksSecondDiv>
                    <MenuLink to="/experience">Experience</MenuLink>
                    <MenuLink to="/projects">Projects</MenuLink>
                    <MenuLink to="/contact">Contact</MenuLink>
                </FloatLinksSecondDiv>
            </FloatLinks>
        </NavContainer>
    )
}