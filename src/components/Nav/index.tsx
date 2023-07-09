import { Link } from 'react-router-dom'
import styled from 'styled-components';

const NavContainer = styled.div`
    width: 100%;
    height: 10vh;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #5252528f;
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
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    display: none;
`
const Links = styled.a`
    text-decoration: none;
    color: #fff;
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
    background-color: #5252528f;
    display: flex;
    align-items: center;
    justify-content: center;
`
const MenuLink = styled.a`
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0 15px;
    transition: all .3s ease-in-out;
    &:hover{
        color: #f2f2f2;
    }
`

export const Navbar = () =>{
    return(
        <NavContainer>
            <LeftNav>
                <Logo src="../../../public/favicon.svg" alt="logo"/>
                <LinksContainer>
                <Links href="https://github.com/DaveOval" target="_blank">
                    <Socials src="../../../public/socials-icons/github.svg" alt="github link" />
                </Links>
                <Links href="https://www.instagram.com/dave_oval/" target="_blank">
                    <Socials src="../../../public/socials-icons/instagram.svg" alt="instagram link" />
                </Links>
                <Links href="https://www.linkedin.com/in/david-vazquez-developer/" target="_blank">
                    <Socials src="../../../public/socials-icons/linkedin.svg" alt="linkedin link" />
                </Links>
                <Links href="https://twitter.com/daveultrau" target="_blank">
                    <Socials src="../../../public/socials-icons/twitter.svg" alt="twitter link" />
                </Links>
                </LinksContainer>
            </LeftNav>
            <RightNav>
                <MenuLink >Works</MenuLink>
                <MenuLink >Experiences</MenuLink>
                <MenuLink >Skills</MenuLink>
                <MenuLink >Contact</MenuLink>
            </RightNav>
        </NavContainer>
    )
}