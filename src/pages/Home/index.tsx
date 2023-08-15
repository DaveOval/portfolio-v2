import { FrontPortFolio } from "../../components/Portfolio"
import { HeaderHome } from "../../components/HeaderHome"
import { SkillsAndTechnologies } from "../../components/SkillsAndTechnologies"
import { ExperienceCard } from "../../components/ExperienceCard"
import { Services } from "../../components/Services"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { colorsui } from "../../ui/colors"

const LinkToContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto; 
    margin-top: 100px;
    margin-bottom: 100px;
    background-color: ${colorsui.backGroundGray};
    width: 100%;
    max-width: 1200px;
    height: 150px;
    border-radius: 15px;
`
const LinkToContact = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 2.5rem;
    font-weight: 700;   
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    padding: 10px;
    background-color: #000;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: #fff;
        color: #000;
    }
`

export const Home = () => {
    return (
        <>
            <HeaderHome />
            <SkillsAndTechnologies />
            <FrontPortFolio />
            <ExperienceCard />
            <Services/>
            <LinkToContactContainer>
                <LinkToContact to="/contact">Contact me</LinkToContact>
            </LinkToContactContainer>

        </>
    )
}